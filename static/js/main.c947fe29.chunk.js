(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a(182)},144:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(22),l=(a(144),a(59)),s=a(42),m=a(62),u=a(60),p=a(61),d=a(31),g=a(82),h=a(233),E=a(232),b=(a(226),a(28),a(258),a(235)),f=(a(83),a(228)),v=a(184),y=(a(230),a(231)),w=a(77),O=a.n(w),S=a(234),C=a(64),I=a(183);a(225),Object(I.a)(function(e){return{root:{display:"flex"},drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0,display:"none"}),appBar:Object(d.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),display:"none"}),menuButton:Object(d.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{height:"2.5rem"},disMain:Object(d.a)({marginLeft:240},e.breakpoints.up("sm"),{display:"none"})}});var k="MENU_OPEN",j="MENU_ITEM_OPEN",N="MENU_CLOSE",x="TOGGLE_SIDE_DRAWER",T=" GO_BACK",A=function(e){return{type:N}},_=function(e,t){return{type:k,event:e,clotheType:t}},D=a(17),U={menuCloseAction:A},R=Object(D.b)(function(e){return{anchorClothing:e.navigation.anchorClothing,anchorShoes:e.navigation.anchorShoes,anchorActivewear:e.navigation.anchorActivewear}},U)(function(e){return r.a.createElement("div",{onMouseEnter:function(){return e.menuCloseAction()},style:{opacity:.5,height:"50vh",width:"100vw",marginTop:"35px"}},e.children)}),B=a(259),M=a(243),F=a(117),P=a(246),W=a(238),G=a(255),L=a(242),H=a(256),z=a(245),V=a(244),J=a(81),q=a.n(J),K=a(237),X=Object(I.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),Y=Object(D.b)(function(e){return{signUp:e.form.signUp,signIn:e.form.signIn}})(function(e){var t=X();return console.log(e),r.a.createElement(K.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(W.a,{className:t.avatar},r.a.createElement(q.a,null)),!0===e.signIn?r.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign In"):r.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(L.a,{control:r.a.createElement(H.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"),r.a.createElement(V.a,{container:!0},r.a.createElement(V.a,{item:!0,xs:!0},r.a.createElement(z.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(V.a,{item:!0},r.a.createElement(z.a,{href:"#",variant:"body2",onClick:function(){e.dispatch({type:"SIGN_IN"})}},"Don't have an account? Sign Up"))))))}),$=a(94),Q=a.n($),Z="FETCH_PRODUCTS_BEGIN",ee="FETCH_PRODUCTS_SUCCESS",te="FETCH_PRODUCTS_FAILURE",ae="FETCH_SINGLE_PRODUCT_SUCCESS",ne="SELECT_CATEGORY",re="CARD_SELECT_BY_ID",oe="FETCH_READY",ie="ADD_BASKET_COUNT",ce="ADD_ITEM_TO_BASKET",le="REMOVE_ITEM_FROM_BASKET",se={headers:{"X-RapidAPI-Key":"07ea04e210mshdcdcdfaeb0a8a2fp1b7079jsnb16592877577","X-RapidAPI-Host":"brianiswu-unofficial-asos-com-v1.p.rapidapi.com"}},me=function(){return{type:Z}},ue=function(e){return{type:ee,payload:{products:e}}},pe=function(e){return{type:te,payload:{error:e}}},de=function(e){return{type:re,id:e}},ge=function(){return{type:oe}},he=function(e){return{type:ae,payload:{item:e}}};function Ee(e){return function(t){return t(me()),Q.a.get("https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=".concat(e,"&sort=freshness&offset=0&limit=100&sizeschema=EU&currency=EUR&store=1&lang=en-GB&channel=mobile-app"),se).then(function(e){return t(ue(e.data.products)),e.data.products}).catch(function(e){return t(pe(e))})}}var be=function(){return{type:ce}},fe=a(113),ve=a.n(fe),ye=Object(I.a)(function(e){return{list:Object(d.a)({display:"flex"},e.breakpoints.down("xs"),{display:"none"}),listItem:{marginRight:e.spacing(6)},paper:{boxShadow:"none !important",marginTop:50,minWidth:250},menuIcon:Object(d.a)({display:"none"},e.breakpoints.down("xs"),{display:"inline-block"}),sideDrawer:Object(d.a)({display:"none"},e.breakpoints.down("xs"),{display:"flex",width:450})}});var we={selectCategory:function(e){return{type:ne,category:e}},openMenuAction:function(e,t){return console.log("open menu action called"),function(a){a(A()),setTimeout(function(){a(_(e,t))},250)}},openMenuItemAction:function(e){return{type:j,event:e}},menuCloseAction:A,toggleSideDrawerAction:function(e){return{type:x,open:e}},goBackAction:function(){return{type:T}}},Oe=Object(D.b)(function(e){return{basket:e.products.basket,menuOpen:e.navigation.menuOpen,menuItemOpen:e.navigation.menuItemOpen,anchorEl:e.navigation.anchorEl,anchorItemEl:e.navigation.anchorItemEl,clothingItems:e.navigation.clothingItems,shoesItems:e.navigation.shoesItems,activewearItems:e.navigation.activewearItems,clothing:e.navigation.clothing,shoes:e.navigation.shoes,activewear:e.navigation.activewear,items:e.navigation.items,anchorClothing:e.navigation.anchorClothing,anchorShoes:e.navigation.anchorShoes,anchorActivewear:e.navigation.anchorActivewear,sideDrawer:e.navigation.sideDrawer}},we)(function(e){var t=function(t){e.selectCategory(t)},a=ye();return r.a.createElement("div",null,r.a.createElement(h.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(b.a,{className:a.menuIcon,onClick:function(){return e.toggleSideDrawerAction(!0)}},r.a.createElement(O.a,null)),r.a.createElement("div",{className:a.sideDrawer},r.a.createElement(B.a,{open:e.sideDrawer,onClose:function(){return e.toggleSideDrawerAction(!1)}},r.a.createElement(f.a,null,r.a.createElement(b.a,{onClick:function(){return e.goBackAction()}},r.a.createElement(ve.a,null)),e.items?e.items.map(function(a,n){return r.a.createElement(c.b,{to:"/clothing"},r.a.createElement(v.a,{button:!0,onClick:function(a){return t("".concat(e.activewear?"activewear ":null," ").concat(a.target.id))},id:a,key:n,style:{minHeight:"3px"}},r.a.createElement(y.a,{style:{pointerEvents:"none"}}," ",a)))}):r.a.createElement(n.Fragment,null,r.a.createElement(M.a,{variant:"button",onClick:function(t,a){return e.openMenuAction(null,"clothing")}},"Clothing"),r.a.createElement(c.b,{to:"/clothing"},r.a.createElement(M.a,{variant:"button",onClick:function(t,a){return e.openMenuAction(null,"footwear")}},"Footwear")),r.a.createElement(c.b,{to:"/clothing"},r.a.createElement(M.a,{variant:"button",onClick:function(t,a){return e.openMenuAction(null,"activewear")}},"Activewear")))))),r.a.createElement(f.a,{component:"nav",className:a.list},r.a.createElement(v.a,{button:!0,className:a.listItem,onMouseEnter:function(t,a){return e.openMenuAction(t.target,"clothing")}},r.a.createElement(y.a,null,"Clothing")),r.a.createElement(v.a,{button:!0,className:a.listItem,onMouseEnter:function(t,a){return e.openMenuAction(t.target,"shoes")}},r.a.createElement(y.a,null,"Footwear")),r.a.createElement(v.a,{button:!0,className:a.listItem,onMouseEnter:function(t,a){return e.openMenuAction(t.target,"activewear")}},r.a.createElement(y.a,null,"Activewear")),r.a.createElement(v.a,{button:!0},r.a.createElement(c.b,{to:"/login"},r.a.createElement(y.a,null,r.a.createElement(C.a,null,"Login"))))),r.a.createElement(F.a,{BackdropComponent:R,open:e.clothing||e.shoes||e.activewear||!1,anchorEl:e.anchorClothing||e.anchorShoes||e.anchorActivewear,elevation:0,className:a.paper},e.items?e.items.map(function(a,n){return r.a.createElement(c.b,{to:"/clothing"},console.log(e),r.a.createElement(P.a,{onClick:function(a){return t("".concat(e.activewear?"activewear ":null," ").concat(a.target.id))},id:a,key:n,style:{minHeight:"3px"}},r.a.createElement(C.a,{variant:"caption",style:{pointerEvents:"none"}}," ",a)))}):null))))}),Se=a(253),Ce=a(247),Ie=a(236),ke=Object(I.a)({root:{flexGrow:1},appBar:{top:"auto",bottom:0}}),je=function(){var e=Object(Ce.a)({target:window}),t=ke();return r.a.createElement("div",null,r.a.createElement(Ie.a,{appear:!0,direction:"up",in:!e},r.a.createElement(h.a,{position:"fixed",color:"primary",className:t.appBar},r.a.createElement(S.a,{style:{alignSelf:"center"}},r.a.createElement(Se.a,{p:2},r.a.createElement(C.a,{variant:"button",color:"inherit",style:{borderRight:"0.1em solid ",paddingRight:"33px"}},"Our Catalog")),r.a.createElement(Se.a,{p:2},r.a.createElement(C.a,{variant:"button",color:"inherit",style:{borderRight:"0.1em solid ",paddingRight:"33px"}},"Terms & Conditions")),r.a.createElement(Se.a,{p:2},r.a.createElement(C.a,{variant:"button",color:"inherit"},"Privacy"))))))},Ne=a(53),xe=a(7),Te=a(248),Ae=a(249),_e=a(251),De=a(250),Ue=Object(I.a)({card:{maxWidth:345,marginTop:"20px",marginBottom:"20px"},media:{height:420}});var Re={addItemToBasket:be,cardSelectByID:de},Be=Object(D.b)(null,Re)(function(e){var t=Object(xe.a)({},e),a=Ue();return r.a.createElement(Te.a,{className:a.card},r.a.createElement(c.b,{to:"/details"},r.a.createElement(Ae.a,{onClick:function(){return t.cardSelectByID(t.id)}},r.a.createElement(De.a,{className:a.media,image:t.img}),r.a.createElement(_e.a,null,r.a.createElement(C.a,{gutterBottom:!0,variant:"caption",component:"h2"},t.name),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",component:"p"},"Price: ",t.price)))))}),Me=a(116),Fe=a(260),Pe=a(252),We=Object(Me.a)({overrides:{MuiPaper:{root:{margin:"0 auto"}}}}),Ge=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).cardSelectByID=function(e){a.props.dispatch(de(e))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Ee(this.props.category))}},{key:"componentDidUpdate",value:function(e){this.props.category!==e.category&&this.props.dispatch(Ee(this.props.category))}},{key:"render",value:function(){var e=this.props,t=e.products,a=e.loading,o=e.error;return o?r.a.createElement("div",null,"Error! ",o.message):a?r.a.createElement(Pe.a,{className:"progress",color:"secondary"}):r.a.createElement(Fe.a,{theme:We}," ",r.a.createElement(n.Fragment,null,r.a.createElement(V.a,{container:!0,justify:"center",alignItems:"center"},t.map(function(e){return r.a.createElement(V.a,{item:!0,key:e.id,xs:12,sm:12,md:6,lg:3}," ",r.a.createElement(Be,{key:e.id,id:e.id,name:e.name,img:e.baseImageUrl,price:e.price.current.text}))}))))}}]),t}(n.Component),Le=Object(D.b)(function(e){return{products:e.products.items,loading:e.products.loading,error:e.products.error,category:e.products.category}})(Ge),He=a(13),ze=a(114),Ve=a(241),Je=a(240),qe=a(257),Ke={duration:5e3,transitionDuration:400,infinite:!0,indicators:!0,arrows:!0},Xe=Object(I.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}),Ye=Object(D.b)(function(e){return{products:e.products.items,loading:e.products.loading,error:e.products.error,item:e.products.item,id:e.products.id}})(function(e){var t=Xe();r.a.useEffect(function(){var t;e.dispatch((t=e.id,function(e){return e(me()),Q.a.get("https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/catalogue/v2/products/".concat(t,"?lang=en-GB&productid=").concat(t,"&store=COM&sizeschema=EU&currency=EUR"),se).then(function(t){return e(he(t.data)),t.data}).then(function(){return e(ge())}).catch(function(t){return e(pe(t))})}))},[]);var a=r.a.useState({size:"Select size",sizeType:""}),n=Object(g.a)(a,2),o=n[0],i=n[1];var c=e.loading,l=e.error,s=e.item;return l?r.a.createElement("div",null,"Error! ",l.message):c?r.a.createElement(Pe.a,{className:"progress",color:"secondary"}):r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h4",gutterBottom:!0},s.name),r.a.createElement(C.a,{variant:"h5",gutterBottom:!0},"Price: ",s.price.current.text),r.a.createElement(M.a,{variant:"contained",color:"primary",onClick:function(){return e.dispatch(be())}},"Add to cart"),r.a.createElement(C.a,{variant:"button",display:"block",gutterBottom:!0},"Brand: ",s.brand.name),r.a.createElement("div",{className:"slideshow"},r.a.createElement(ze.Slide,Object.assign({},Ke,{style:{width:"314px",margin:"0 auto"}}),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url('https://".concat(s.media.images[0].url,"')"),height:"400px",width:"314px",margin:"0 auto"}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url('https://".concat(s.media.images[1].url,"')"),height:"400px",width:"314px",margin:"0 auto"}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url('https://".concat(s.media.images[2].url,"')"),height:"400px",width:"314px",margin:"0 auto"}})))),r.a.createElement("form",{className:t.root,autoComplete:"off"},r.a.createElement(Je.a,{className:t.formControl},r.a.createElement(qe.a,{value:o.size,onChange:function(e){i(function(t){return Object(He.a)({},t,Object(d.a)({},e.target.name,e.target.value))})},name:"size",displayEmpty:!0,className:t.selectEmpty},r.a.createElement(P.a,{value:"Select size",disabled:!0},"Select size"),s.variants.map(function(e){return r.a.createElement(P.a,{value:e.brandSize},e.brandSize)})),r.a.createElement(Ve.a,null,"Select your size"))))});function $e(){return r.a.createElement(n.Fragment,null,r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},"Built with love by the ",r.a.createElement(z.a,{color:"inherit",href:"https://material-ui.com/"},"Material-UI")," team. "),r.a.createElement(C.a,{variant:"body2",color:"textSecondary",align:"center"},"Edited to suit this project by Chingu Geckos-12"))}var Qe=Object(I.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}),Ze=Object(D.b)(function(e){return{signUp:e.form.signUp,signIn:e.form.signIn}})(function(e){var t=Qe();return r.a.createElement(K.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(W.a,{className:t.avatar},r.a.createElement(q.a,null)),r.a.createElement(C.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(V.a,{container:!0,spacing:2},r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(G.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(V.a,{item:!0,xs:12,sm:6},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(G.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(L.a,{control:r.a.createElement(H.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(M.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign Up"),r.a.createElement(V.a,{container:!0,justify:"flex-end"},r.a.createElement(V.a,{item:!0},r.a.createElement(z.a,{href:"#",variant:"body2",onClick:function(){e.dispatch({type:"SIGN_IN"})}},"Don't have an account? Sign Up"))))),r.a.createElement(Se.a,{mt:5},r.a.createElement($e,null)))}),et=Object(D.b)(function(e){return{signIn:e.form.signIn,signUp:e.form.signUp}})(function(e){return r.a.createElement(n.Fragment,null,e.signIn?r.a.createElement(Y,null):r.a.createElement(Ze,null))}),tt=a(119),at=Object(I.a)(function(e){return{root:{display:"flex"},basketItems:{flexGrow:"2"},basketSummary:{flexGrow:"1",margin:e.spacing(2,2)},basketItem:{padding:e.spacing(3,2),margin:e.spacing(2,2)},list:{listStyleType:"none"},thumbnail:{width:"10%"}}}),nt=Object(D.b)(function(e){return{basket:e.products.basket,loading:e.products.loading}})(function(e){var t=e.basket,a=at();console.log(t[0]);var n=t.reduce(function(e,t){return e+t.price.current.value},0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.basketItems},r.a.createElement("ul",{className:a.list},t.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(tt.a,{className:a.basketItem},r.a.createElement("img",{className:a.thumbnail,src:"https://".concat(t.media.images[0].url),alt:"thumbnail"}),t.name,t.price.current.text,t.isInStock?"IN STOCK":null,r.a.createElement(M.a,{variant:"contained",color:"primary",onClick:function(a){return e.dispatch(function(e){return{type:le,id:e}}(t.id))}},"REMOVE")))}))),r.a.createElement("div",{className:a.basketSummary},r.a.createElement(tt.a,null,r.a.createElement("h1",null,"Order summary:"),r.a.createElement("h4",null,"Total cost: ",n.toFixed(2)," EUR"),n<=0?null:r.a.createElement(M.a,{variant:"contained",color:"primary",onClick:function(){return alert("Redirecting to checkout")}},"PROCEED TO CHECKOUT")))))}),rt=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Oe,null),r.a.createElement(Ne.c,null,r.a.createElement(Ne.a,{component:Le,path:"/clothing"}),r.a.createElement(Ne.a,{component:Ye,path:"/details",exact:!0}),r.a.createElement(Ne.a,{component:et,path:"/login"}),r.a.createElement(Ne.a,{component:nt,path:"/basket"})),r.a.createElement(je,null))}}]),t}(n.Component),ot=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var it=a(52),ct=a(66),lt={items:[],loading:!1,error:null,category:"",id:1,item:[],basketCount:0,basket:[]};var st={signIn:!0,signUp:!1},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st;switch((arguments.length>1?arguments[1]:void 0).type){case"SIGN_IN":return Object(He.a)({},e,{signIn:!e.signIn});case"SIGN_UP":return Object(He.a)({},e,{signUp:!0,signIn:!1});default:return e}},ut={menuOpen:!1,menuItemOpen:!1,anchorClothing:null,anchorShoes:null,anchorActivewear:null,anchorEl:null,anchorItemEl:null,clothing:!1,shoes:!1,activewear:!1,clothingItems:["Hoodies & Sweatshits","Jackets & Coats","Jeans","Shirts","Shorts","Loungewear","Suits","Socks","Swimwear","Vests","Trousers","Underwear"],shoesItems:["Loafers","Heels","Sandals","Sperrys","Flip-Flops"],activewearItems:["View All","Footwear","Shorts","Swim","Tops","Tights"],items:null,sideDrawer:!1};var pt=Object(it.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(He.a)({},e,{loading:!0,error:null});case ee:return Object(He.a)({},e,{loading:!1,items:t.payload.products});case ae:return Object(He.a)({},e,{loading:!0,item:t.payload.item});case te:return Object(He.a)({},e,{loading:!1,error:t.payload.error,items:[]});case ne:return Object(He.a)({},e,{loading:!1,category:t.category});case re:return Object(He.a)({},e,{loading:!0,id:t.id});case oe:return Object(He.a)({},e,{loading:!1});case ie:return Object(He.a)({},e,{basketCount:e.basketCount+1});case ce:return Object(He.a)({},e,{basket:[].concat(Object(ct.a)(e.basket),[e.item])});case le:var a=Object(ct.a)(e.basket.filter(function(e){return e.id!==t.id}));return Object(He.a)({},e,{basket:a});default:return e}},form:mt,navigation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(He.a)({},e,{items:null});case x:return Object(He.a)({},e,{sideDrawer:t.open});case N:return Object(He.a)({},e,{menuOpen:!1,clothing:!1,shoes:!1,activewear:null,anchorClothing:null,anchorShoes:null});case k:if("clothing"===t.clotheType)return Object(He.a)({},e,{clothing:!0,shoes:!1,activewear:!1,anchorClothing:t.event,anchorShoes:null,anchorActivewear:null,items:["Hoodies & Sweatshits","Jackets & Coats","Jeans","Shirts","Shorts","Loungewear","Suits","Socks","Swimwear","Vests","Trousers","Underwear"]});if("shoes"===t.clotheType)return Object(He.a)({},e,{clothing:!1,shoes:!0,activewear:!1,anchorClothing:null,anchorShoes:t.event,anchorActivewear:null,items:["Loafers","Heels","Trainers","Sperrys","Plimsoll"]});if("activewear"===t.clotheType)return Object(He.a)({},e,{clothing:!1,shoes:!1,activewear:!0,anchorClothing:null,anchorShoes:null,anchorActivewear:t.event,items:["View All","Footwear","Shorts","Swim","Tops","Tights"]});break;case j:return Object(He.a)({},e,{menuItemOpen:!0,anchorItemEl:t.event});default:return e}}}),dt=a(115),gt=(a(181),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());gt=function(e){return e};var ht=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),Et=Object(it.e)(pt,ht,Object(it.d)(Object(it.a)(dt.a),gt));Et.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(Et.getState())});var bt=r.a.createElement(D.a,{store:Et},r.a.createElement(c.a,null,r.a.createElement(ot,null)));i.a.render(bt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[139,1,2]]]);
//# sourceMappingURL=main.c947fe29.chunk.js.map