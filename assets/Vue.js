






var drop=new Vue({
    el:'#drop',
    data:{
        custlists:[],
        vendlists:[],
        items:[],
        newvendlists:[],
        servicelists:[],
        lists:[

            {
                name:"yadhu",
                movingfrom:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance:"Moving Distance 50 KM",
                dateofshifting:"23/06/2019",
                movetype:"2 BHK",
                totalitems:"25",
                number:"678987654",
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'sofa',
                    'TV' ,
                    'chair 4',
                    'sofa',
                    'TV',
                    'light'
                ]
            },
            {
                name:"venkatesh",
                movingfrom:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance:"Moving Distance 50 KM",
                dateofshifting:"23/06/2019",
                movetype:"2 BHK",
                totalitems:"25",
                number:"978987654",
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'dresser 1',
                    'fan 2'
                ]
            },
            {
                name:"venkat",
                movingfrom:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance:"Moving Distance 50 KM",
                dateofshifting:"23/06/2019",
                movetype:"2 BHK",
                totalitems:"25",
                number:"778987654",
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'tablemate 1',
                    
                ]
            },
            {
                name:"ve",
                movingfrom:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance:"Moving Distance 50 KM",
                dateofshifting:"23/06/2019",
                movetype:"2 BHK",
                totalitems:"25",
                number:"078987654",
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'sofa 2',
                    'cub board 1',
                    'washing machine 1'
                ]
            }
            ,
            {
                name:"yadhu",
            }, {
                name:"raj",
            }, {
                name:"mom",
            }, {
                name:"dad",
            }, {
                name:"boy",
            }, {
                name:"girl",
            }, {
                name:"you",
            }, {
                name:"we",
            }, {
                name:"them",
            }, {
                name:"hello",
            },
        ],
        lists2:[
            {
                name:"yadhu2",
                movingfrom2:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance2:"Moving Distance 50 KM",
                name:"edwin1",
                dateofshifting2:"Jul.23",
                movingtype2:" 2 BHK",
                totalitems2:" 25",
                number2:"6789876546",
                requestedtime2:"5pm",
                vendors2:[
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:'20000',
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    }
                ]
            },
            {
                name:"venkatesh2",
                age:'21',
                date:'13.08.2018',
                quote:'',
                vendors2:[
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:'20000',
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    }
                ]
            },
            {
                name:"venkat2",
                age:'21',
                date:'14.08.2018',
                vendors2:[],
                quote:""
            },
            {
                name:"ve2",
                age:'21',
                date:'15.08.2018',
                vendors2:[],
                quote:"20000"
            }
        ],
        lists3:[
            {
                name:"yadhu23",
                date:"july 3",
                movingfrom3:"19th, A Ejipura, BangaloreCross",
                movingto3:"19th, A Ejipura, BangaloreCross",
                movingdistance3:"Moving Distance 50 KM",
                dateofshifting3:"July 23",
                movetype3:"2 BHK",
                totalitems3:"25",
                companyconformedfor3:"Plan Packers And Movers ",
                numberofcompany3:"9487874439",
                amount3:"18000 ",


            },
            {name:"venkatesh23",age:'21'},
            {name:"venkat23",age:'21'},
            {name:"ve23",age:'21',},
            
        ],
        lists4:[
            {
                name:"yadhu24",
                movingfrom4:"19th, A Ejipura, BangaloreCross",
                movingto4:"19th, A Ejipura, BangaloreCross",
                movingdistance4:"Moving Distance 50 KM",
                dateofshifting4:"23/06/2019",
                movingtype4:"2 BHK",
                totalitems4:"25",
                Cancelledon4:"6pm",
            },
            {
                name:"venkatesh24",
                age:'21'
            },
            {
                name:"venkat24",
                age:'21'
            },
            {
                name:"ve24"
                ,age:'21'
            },
            {
                name:"ve234"
                ,age:'21'
            }
        ],
    
     height:"300vh",
     height1:"100vh",
     count:0,
     cart:"",
     cart2:"",
     display:"none",
     display1:"block",
    colors:[],
    model:false,
    id:"",
    // custlists:[],
    // currentSort:'name',
    // currentSortDir:'asc',
    // pageSize:2,
    // currentPage:1,
    submitted:false,
    preload:"ss",
    adduser:"",
    onsubmit:""
    



 


        
    },
    methods:{

        redirectonsubmit(){
            setTimeout(()=>{
                window.location.href="file:///C:/Users/Premium/Desktop/boxigo_admin_portal/index.html";
            },2000);
        },

        itemcreate(){
            var itemcategory=document.getElementById("itemcategory").value;
            var itemitems=document.getElementById("itemitems").value;
            var itemtype=document.getElementById("itemtype").value;

            console.log(itemcategory,itemitems,itemtype);
            fetch('http://boxigo.in/boxigo-backend-api/product/items_create_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    
                    {
            
                        type: itemtype,
                        category: itemcategory,
                        
                        items: itemitems,
                       
                    }

                )
              })
            
        },

        servicecreate(){
            var name=document.getElementById("name").value;
            var displayname=document.getElementById("displayname").value;
            var serviceinfo=document.getElementById("serviceinfo").value;
            // var createddate=document.getElementById("createddate").value;
            // var lastdate=document.getElementById("lastdate").value;

            // var id=Math.random();
           
            console.log(name,displayname,serviceinfo);

            // fetch('http://boxigo.in/boxigo-backend-api/product/vendor_update_service.php', {
            //     method: 'post',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(
                    
            //         {
            //             id: id,
            //             name: name,
            //             display_name:displayname,
            //             service_info:[serviceinfo],
            //             created_date: createddate,
            //             last_update_date: lastdate
            //         }

            //     )
            //   })
           
        },

        existingvendorcreate(){
            var name=document.getElementById("name").value;
            var displayname=document.getElementById("displayname").value;
            var serviceinfo=document.getElementById("serviceinfo").value;
            var createddate=document.getElementById("createddate").value;
            var lastdate=document.getElementById("lastdate").value;

            var id=Math.random();
           
            console.log(name,displayname,serviceinfo,createddate,lastdate);

            // fetch('http://boxigo.in/boxigo-backend-api/product/vendor_update_service.php', {
            //     method: 'post',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify(
                    
            //         {
            //             id: id,
            //             name: name,
            //             display_name:displayname,
            //             service_info:[serviceinfo],
            //             created_date: createddate,
            //             last_update_date: lastdate
            //         }

            //     )
            //   })
           
        },

     
        existingvendorsubmit(id,businessname,actdate,contactaddr,businesscontact,category,merchantstatus,contractstatus,namegst,gstinnumber,regaddr,name,email,phone,createddate,lastupdate,ratecard){
            
            fetch('http://boxigo.in/boxigo-backend-api/product/vendor_update_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    
                    {
                        id: id,
                        business_name: businessname,
                        activation_date: actdate,
                        contact_address: contactaddr,
                        business_contact_no: businesscontact,
                        category: category,
                        merchant_status: merchantstatus,
                        contract_status: contractstatus,
                        name_as_per_gst:namegst,
                        GSTIN_number: gstinnumber,
                        registered_address: regaddr,
                        owner_name: name,
                        owner_email: email,
                        owner_phone:phone,
                        created_date: createddate,
                        last_update_date: lastupdate,
                        rate_card_detail: ratecard
                        }

                )
              })
              this.redirectonsubmit();
              this.onsubmit="submitted";
              

        },

        itemsubmit(id,type,category,item){
            fetch('http://boxigo.in/boxigo-backend-api/product/items_update_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                        type:type,
                        category:category,
                        items: item,
                        
                        }
                )
              })
              this.redirectonsubmit();
              this.onsubmit="submitted";
        },

        customersubmit(id,firstname,lastname,email,phone,key,emailverify,phoneverify,date){
            
            fetch('http://boxigo.in/boxigo-backend-api/product/customer_update_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        user_id: id,
                        first_name: firstname,
                        last_name: lastname,
                        email: email,
                        phone: phone,
                        verification_key:key ,
                        is_email_verified:emailverify ,
                        is_phone_verified: phoneverify,
                        date_created: date
                    }
                )
              })
              this.redirectonsubmit();
              this.onsubmit="submitted";
             
        },
        newvendorsubmit(id,name,email,phone,businessname,businessnumber,website,verify,phnverify,legalauth,terms,created,lastupdate){
            var currentdate = new Date();
            var datetime =  currentdate.getDay() + "/" + currentdate.getMonth() 
            + "/" + currentdate.getFullYear() + " " 
            + currentdate.getHours() + ":" 
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
            console.log(datetime);
            fetch('http://boxigo.in/boxigo-backend-api/product/vendor_request_update_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                        name: name,
                        email: email,
                        phone: phone,
                        business_name: businessname,
                        business_contact_no: businessnumber,
                        business_website_url: website,
                        verification_key: verify,
                        is_phone_verified: phnverify,
                        legally_authorised: legalauth,
                        accept_terms_conditions: terms,
                        created_date: created,
                        last_update_date: datetime
                        }
                )
              })
              this.redirectonsubmit();
              this.onsubmit="submitted";

        },

        servicesubmit(name,display,info,created,lastupdate,id){
            
            
            fetch('http://boxigo.in/boxigo-backend-api/product/servicesType_update_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                        name: name,
                        display_name:display,
                        service_info:[info],
                        created_date: created,
                        last_update_date: lastupdate
                    }
                )
              })
              this.redirectonsubmit();
              this.onsubmit="submitted";
                
        },
        servicedelete(id){
            console.log(id);
            fetch('http://boxigo.in/boxigo-backend-api/product/servicesType_delete_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                       
                    }
                )
              })
              this.redirectonsubmit();

        },

        existingvendordelete(id){
            console.log(id);
            fetch('http://boxigo.in/boxigo-backend-api/product/vendor_delete_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                        
                    }
                )
              })
              this.redirectonsubmit();

        },

        newvendordelete(id){
            console.log("done");
            fetch('http://boxigo.in/boxigo-backend-api/product/vendor_request_delete_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                        
                    }
                )
              })
              this.redirectonsubmit();

        },

        customerdelete(id){
           
            fetch('http://boxigo.in/boxigo-backend-api/product/customer_delete_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        user_id: id,
                        
                    }
                )
              })

              this.redirectonsubmit();
        },
        itemdelete(id){
            
            fetch('http://boxigo.in/boxigo-backend-api/product/items_delete_service.php', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        id: id,
                        
                    }
                )
              })

        },
        
        drop1(id){
        this.cart=id;
        },
        drop2(id){
            if(id === this.cart){
                this.cart="";
            }
            
        },
        drop12(id){
        this.cart2=id;
           console.log(id);

        }, 
         drop22(id){
            if(id === this.cart2){
                console.log(id);
                this.cart2="";
            }  
        },
        modelclose(id){
            this.model=false;
            if(id === this.id){
                this.id="";
            }
        },
        modelopen(id){
            this.model=true;

            this.id=id;
            console.log(id);
            
        },
        modelclose1(){
           
                this.id="";
            
        },

        
    },
// 

  created(){
      fetch("http://boxigo.in/boxigo-backend-api/product/servicesType_get_service.php").then(res=>res.json()).then((data)=>{
           var dataservice=Object.assign(data,{});
           var datafinal=[...dataservice.serviceType];

          this.servicelists.push(datafinal);
         
          
          
      })

      fetch("http://boxigo.in/boxigo-backend-api/product/vendor_get_service.php").then(res=>res.json()).then((data)=>{
        var datavendor=Object.assign(data,{});
        var datafinalvendor=[...datavendor.vendor];
        this.vendlists.push(datafinalvendor);
       
       
   })

   fetch("http://boxigo.in/boxigo-backend-api/product/customer_get_service.php").then(res=>res.json()).then((data)=>{
    var datacustomer=Object.assign(data,{});
    var datafinalcustomer=[...datacustomer.customers];
    this.custlists.push(datafinalcustomer);
    
   
})

fetch("http://boxigo.in/boxigo-backend-api/product/items_get_service.php").then(res=>res.json()).then((data)=>{
    var dataitems=Object.assign(data,{});
    var datafinalitems=[...dataitems.items];
    this.items.push(datafinalitems);
    
   
})

fetch("http://boxigo.in/boxigo-backend-api/product/vendor_request_get_service.php").then(res=>res.json()).then((data)=>{
    var datanewvendor=Object.assign(data,{});
    var datafinalnewvendor=[...datanewvendor.vendor_request];
    this.newvendlists.push(datafinalnewvendor);
    
   
})

  }



});

