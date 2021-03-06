import firebase from '@firebase/app'
import 'firebase/firestore'
import subDays from 'date-fns/sub_days'

export default async function ({ store, route, redirect }) {
  try {
    store.commit('m_loader', true)

    const acomod = await firebase.firestore().doc(`acomods/${route.params.id}`).get()

    if (acomod.exists) {
      /* Add visit a essa acomod */
      firebase.firestore().collection(`acomods/${route.params.id}/visits`).add({
        date: new Date().getTime(),
        fromMobile: store.state.isMobile,
        clickedReservaBtn: false,
        wentToReservaPage: false,
        concludedReserva: false
      })
      .then(visit => { store.state.visitID = visit.id }).catch(err => console.log(err))
      /* Get visits do mês atual dessa acomod */
      const startDateLast30Days = subDays(new Date(), 30)
      firebase.firestore().collection(`acomods/${route.params.id}/visits`).where('date', '>', Date.parse(startDateLast30Days)).get()
      .then(visits => { store.commit('m_visitsLastMonth', visits.size) }).catch(err => console.log(err))
    } else {
      store.commit('m_loader', false)
      store.commit('show_alert', {
        type: 'warning',
        title: 'Ops',
        message: `A acomodação ${route.params.id} não está listada. Veja se alguma dessas lhe agrada.`,
        persist: true
      })
      redirect('/acomodacoes')
    }
  } catch (err) {
    redirect('/')
    store.commit('m_loader', false)
    console.log(err)
  }
}
