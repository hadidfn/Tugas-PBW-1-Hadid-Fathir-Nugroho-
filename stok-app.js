const stokApp = Vue.createApp({

    data(){

        return{

            dataBahanAjar:dataBahanAjar,

            upbjjList:upbjjList,

            kategoriList:kategoriList,

            filterUpbjj:'',

            filterKategori:'',

            sortBy:'judul',

            warningOnly:false,

            kode:'',
            judul:'',
            kategori:'',
            upbjj:'',
            lokasiRak:'',
            qty:'',
            safety:'',
            harga:'',

            errorMessage:''

        }

    },

    computed:{

        filteredData(){

            let data =
            [...this.dataBahanAjar]

            if(this.filterUpbjj != ''){

                data = data.filter(

                    item =>

                    item.upbjj ==
                    this.filterUpbjj

                )

            }

            if(this.filterKategori != ''){

                data = data.filter(

                    item =>

                    item.kategori ==
                    this.filterKategori

                )

            }

            if(this.warningOnly){

                data = data.filter(

                    item =>

                    item.qty <
                    item.safety

                )

            }

            data.sort((a,b)=>{

                if(this.sortBy == 'judul'){

                    return a.judul
                    .localeCompare(
                        b.judul
                    )

                }

                return a[this.sortBy]
                - b[this.sortBy]

            })

            return data

        }

    },

    methods:{

        tambahData(){

            if(
                this.kode == '' ||
                this.judul == '' ||
                this.kategori == '' ||
                this.upbjj == '' ||
                this.qty === '' ||
                this.safety == '' ||
                this.harga == ''
            ){

                this.errorMessage =
                'Semua data wajib diisi'

                return

            }

            this.dataBahanAjar.push({

                kode:this.kode,

                judul:this.judul,

                kategori:this.kategori,

                upbjj:this.upbjj,

                lokasiRak:this.lokasiRak,

                harga:Number(this.harga),

                qty:Number(this.qty),

                safety:Number(this.safety),

                catatanHTML:
                '<b>Data baru</b>'

            })

            this.kode = ''
            this.judul = ''
            this.kategori = ''
            this.upbjj = ''
            this.lokasiRak = ''
            this.harga = ''
            this.qty = ''
            this.safety = ''

            this.errorMessage = ''

        },

        editData(item){

            this.kode = item.kode
            this.judul = item.judul
            this.kategori = item.kategori
            this.upbjj = item.upbjj
            this.lokasiRak = item.lokasiRak
            this.qty = item.qty
            this.safety = item.safety
            this.harga = item.harga

        },

        resetFilter(){

            this.filterUpbjj = ''
            this.filterKategori = ''
            this.warningOnly = false
            this.sortBy = 'judul'

        }

    },

    watch:{

        kode(value){

            console.log(
                'Kode diketik:',
                value
            )

        },

        filterUpbjj(value){

            console.log(
                'UPBJJ dipilih:',
                value
            )

        }

    }

})

stokApp.mount('#stokApp')