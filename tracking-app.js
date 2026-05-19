const trackingApp = Vue.createApp({

    data(){

        return{

            dataTracking:dataTracking,

            paketList:paketList,

            nomorDO:'',

            nim:'',

            nama:'',

            ekspedisi:'',

            paketDipilih:'',

            tanggalKirim:'',

            hasil:null,

            errorMessage:''

        }

    },

    computed:{

        nomorDOBaru(){

            const jumlah =
            Object.keys(
                this.dataTracking
            ).length + 1

            return `DO2025-00${jumlah}`

        },

        detailPaket(){

            return this.paketList.find(

                item =>

                item.kode ==
                this.paketDipilih

            )

        }

    },

    methods:{

        tambahTracking(){

            if(
                this.nim == '' ||
                this.nama == '' ||
                this.ekspedisi == '' ||
                this.paketDipilih == ''
            ){

                this.errorMessage =
                'Semua field wajib diisi'

                return

            }

            this.dataTracking[
                this.nomorDOBaru
            ] = {

                nim:this.nim,

                nama:this.nama,

                status:
                'Diproses',

                ekspedisi:
                this.ekspedisi,

                tanggalKirim:
                this.tanggalKirim,

                paket:
                this.paketDipilih,

                total:
                this.detailPaket.harga,

                perjalanan:[

                    {
                        waktu:
                        new Date()
                        .toLocaleString(),

                        keterangan:
                        'Pesanan dibuat'
                    }

                ]

            }

            alert(
                'Tracking berhasil ditambahkan'
            )

            this.nim = ''
            this.nama = ''
            this.ekspedisi = ''
            this.paketDipilih = ''

            this.errorMessage = ''

        },

        cariTracking(){

            const cari =
            this.dataTracking[
                this.nomorDO
            ]

            if(cari){

                this.hasil = cari

                this.errorMessage = ''

            }

            else{

                this.hasil = null

                this.errorMessage =
                'Nomor DO tidak ditemukan'

            }

        }

    },

    mounted(){

        const today =
        new Date()

        this.tanggalKirim =
        today.toISOString()
        .split('T')[0]

    }

})

trackingApp.mount('#trackingApp')