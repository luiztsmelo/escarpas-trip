export const tipoAcomod = {
  computed: {
    acomod () { return this.$store.state.acomod },
    acomodData () { return this.$store.state.acomodData },
    tipoAcomodA () {
      const path = this.acomod.tipoAcomod
      return path === 'Casa' ? 'a casa'
           : path === 'Apartamento' ? 'o apartamento'
           : path === 'Suítes' ? 'as Suítes'
           : path === 'Rancho' ? 'o rancho'
           : path === 'Chácara' ? 'a chácara'
           : path === 'Camping' ? 'o camping'
           : path === 'Sítio' ? 'o sítio'
           : path === 'Fazenda' ? 'a fazenda'
           : path === 'Hostel' ? 'o hostel'
           : ''
    },
    tipoAcomodAd () {
      const path = this.acomodData.tipoAcomod
      return path === 'Casa' ? 'a casa'
           : path === 'Apartamento' ? 'o apartamento'
           : path === 'Suítes' ? 'as Suítes'
           : path === 'Rancho' ? 'o rancho'
           : path === 'Chácara' ? 'a chácara'
           : path === 'Camping' ? 'o camping'
           : path === 'Sítio' ? 'o sítio'
           : path === 'Fazenda' ? 'a fazenda'
           : path === 'Hostel' ? 'o hostel'
           : ''
    },
    tipoAcomodD () {
      const path = this.acomod.tipoAcomod
      return path === 'Casa' ? 'da casa'
           : path === 'Apartamento' ? 'do apartamento'
           : path === 'Suítes' ? 'das Suítes'
           : path === 'Rancho' ? 'do rancho'
           : path === 'Chácara' ? 'da chácara'
           : path === 'Camping' ? 'do camping'
           : path === 'Sítio' ? 'do sítio'
           : path === 'Fazenda' ? 'da fazenda'
           : path === 'Hostel' ? 'do hostel'
           : ''
    },
    tipoAcomodN () {
      const path = this.acomod.tipoAcomod
      return path === 'Casa' ? 'na casa'
           : path === 'Apartamento' ? 'no apartamento'
           : path === 'Suítes' ? 'nas Suítes'
           : path === 'Rancho' ? 'no rancho'
           : path === 'Chácara' ? 'na chácara'
           : path === 'Camping' ? 'no camping'
           : path === 'Sítio' ? 'no sítio'
           : path === 'Fazenda' ? 'na fazenda'
           : path === 'Hostel' ? 'no hostel'
           : ''
    },
    tipoAcomodDd () {
      const path = this.acomodData.tipoAcomod
      return path === 'Casa' ? 'da casa'
           : path === 'Apartamento' ? 'do apartamento'
           : path === 'Suítes' ? 'das Suítes'
           : path === 'Rancho' ? 'do rancho'
           : path === 'Chácara' ? 'da chácara'
           : path === 'Camping' ? 'do camping'
           : path === 'Sítio' ? 'do sítio'
           : path === 'Fazenda' ? 'da fazenda'
           : path === 'Hostel' ? 'do hostel'
           : ''
    },
    tipoAcomodS () {
      const path = this.acomod.tipoAcomod
      return path === 'Casa' ? 'sua casa'
           : path === 'Apartamento' ? 'seu apartamento'
           : path === 'Suítes' ? 'suas Suítes'
           : path === 'Rancho' ? 'seu rancho'
           : path === 'Chácara' ? 'sua chácara'
           : path === 'Camping' ? 'seu camping'
           : path === 'Sítio' ? 'seu sítio'
           : path === 'Fazenda' ? 'sua fazenda'
           : path === 'Hostel' ? 'seu hostel'
           : ''
    },
    tipoAcomodSd () {
      const path = this.acomodData.tipoAcomod
      return path === 'Casa' ? 'sua casa'
           : path === 'Apartamento' ? 'seu apartamento'
           : path === 'Suítes' ? 'suas Suítes'
           : path === 'Rancho' ? 'seu rancho'
           : path === 'Chácara' ? 'sua chácara'
           : path === 'Camping' ? 'seu camping'
           : path === 'Sítio' ? 'seu sítio'
           : path === 'Fazenda' ? 'sua fazenda'
           : path === 'Hostel' ? 'seu hostel'
           : ''
    },
    tipoAcomodUpperLinda () {
      const path = this.acomodData.tipoAcomod
      return path === 'Casa' ? 'Linda casa'
           : path === 'Apartamento' ? 'Lindo apartamento'
           : path === 'Suítes' ? 'Lindas Suítes'
           : path === 'Rancho' ? 'Lindo rancho'
           : path === 'Chácara' ? 'Linda chácara'
           : path === 'Camping' ? 'Lindo camping'
           : path === 'Sítio' ? 'Lindo sítio'
           : path === 'Fazenda' ? 'Linda fazenda'
           : path === 'Hostel' ? 'Lindo hostel'
           : ''
    },
    tipoAcomodE () {
      const path = this.acomod.tipoAcomod
      return path === 'Casa' ? 'Esta casa'
           : path === 'Apartamento' ? 'Este apartamento'
           : path === 'Suítes' ? 'Estas Suítes'
           : path === 'Rancho' ? 'Este rancho'
           : path === 'Chácara' ? 'Esta chácara'
           : path === 'Camping' ? 'Este camping'
           : path === 'Sítio' ? 'Este sítio'
           : path === 'Fazenda' ? 'Esta fazenda'
           : path === 'Hostel' ? 'Este hostel'
           : ''
    }
  }
}
