(this.webpackJsonpTalkio=this.webpackJsonpTalkio||[]).push([[0],{41:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(4),r=s.n(n),i=s(28),c=s.n(i),o=(s(39),s(40),s(41),s(15)),l=s(9),d=s(25),m=(d.a.initializeApp({apiKey:"AIzaSyBmDYViSp6gyW2jODsmiO_Nj9loa_VcAxs",authDomain:"talkio-82efd.firebaseapp.com",projectId:"talkio-82efd",storageBucket:"talkio-82efd.appspot.com",messagingSenderId:"157639179794",appId:"1:157639179794:web:c31e8827249b46f395e2cb",measurementId:"G-B7HM811T43"}),d.a.auth()),j=d.a.firestore(),b=s(22),h=s(16),u=s(17),f=s(19),x=s(18),p=s(7),O=s.n(p),g=s.p+"static/media/login.01849878.jpg",v=function(e){Object(f.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).handleChange=function(t){var s=t.target;e.setState(Object(b.a)({},s.name,s.value))},e.handleSubmit=function(t){t.preventDefault(),m.signInWithEmailAndPassword(e.state.email,e.state.password).then((function(t){t.user.emailVerified||m.signOut().then((function(){e.setState({error:"Please verify your Email address to proceed."}),O()(".alert-danger").removeClass("d-none"),O()("#resend__email__verification").show()}))})).catch((function(t){e.setState({error:t.message}),O()(".alert-danger").removeClass("d-none")}))},e.state={email:"",password:"",error:""},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"signin",className:"d-flex bg-white flex-xl-row min-vh-100 flex-column align-items-center noselect justify-content-center",children:[Object(a.jsx)("div",{className:"col-xl-6 col-12 bg- d-flex justify-content-center",children:Object(a.jsx)("img",{src:g,alt:"login",style:{height:"75vh"},className:""})}),Object(a.jsxs)("div",{className:"col-xl-5 col-12 d-flex flex-column justify-content-center",children:[Object(a.jsx)("h1",{className:"text-center mb-4",children:"Login"}),Object(a.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-envelope"})," Email"]}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",autoComplete:"off",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-asterisk"})," Password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsx)(o.b,{to:"/forgot-password",children:"Forgot password"}),Object(a.jsx)(o.b,{to:"/register",children:"Register"})]}),Object(a.jsx)("div",{class:"alert alert-danger d-none my-5",role:"alert",children:this.state.error}),Object(a.jsx)("div",{className:"text-center my-3",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success shadow",children:"Login"})}),Object(a.jsx)("div",{id:"resend__email__verification",style:{display:"none"},onClick:function(){m.signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){alert("logged in"),e.user.sendEmailVerification().finally((function(){m.signOut().finally((function(){alert("Verification link resent.")}))}))}))},children:"Resend verification mail"})]})]})]})}}]),s}(n.Component),w=s.p+"static/media/register.66be7dfa.jpg",N=function(e){Object(f.a)(s,e);var t=Object(x.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).passwordSecure=function(){return!!e.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/)},e.handleChange=function(t){var s=t.target;e.setState(Object(b.a)({},t.target.name,t.target.value),(function(){"password"===s.name&&(e.passwordSecure()&&e.state.password===e.state.confirmPassword?O()("#confirmPassword").removeClass("is-invalid").addClass("is-valid"):O()("#confirmPassword").addClass("is-invalid").removeClass("is-valid"),e.passwordSecure()?O()("#password").removeClass("is-invalid").addClass("is-valid"):O()("#password").addClass("is-invalid").removeClass("is-valid")),"confirmPassword"===s.name&&(e.passwordSecure()&&e.state.password===e.state.confirmPassword?O()("#confirmPassword").removeClass("is-invalid").addClass("is-valid"):O()("#confirmPassword").addClass("is-invalid").removeClass("is-valid"))}))},e.handleSubmit=function(t){t.preventDefault(),e.passwordSecure()&&e.state.confirmPassword===e.state.password&&m.createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(e){j.collection("users").doc(e.user.uid).set({email:e.user.email}).then((function(){e.user.sendEmailVerification().then((function(){m.signOut().finally((function(){O()(".alert-danger").addClass("d-none"),O()(".alert-success").removeClass("d-none")}))}))}))})).catch((function(t){e.setState({error:t.message}),O()(".alert-success").addClass("d-none"),O()(".alert-danger").removeClass("d-none")}))},e.state={email:"",password:"",confirmPassword:"",error:""},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"signup",className:"min-vh-100 bg-white d-flex flex-xl-row flex-column mx-auto align-items-center justify-content-center",children:[Object(a.jsx)("div",{className:"col-xl-6 col-12 bg- d-flex justify-content-center",children:Object(a.jsx)("img",{src:w,alt:"login",style:{height:"75vh"},className:""})}),Object(a.jsxs)("div",{className:"col-xl-5 col-12 d-flex flex-column justify-content-center",children:[Object(a.jsxs)("h1",{style:{fontFamily:"SF Pro Rounded",fontWeight:"bold"},className:"text-center mb-4",children:[" ","Register"," "]}),Object(a.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-envelope"})," Email"]}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",required:!0,autoFocus:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-asterisk"})," Password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("small",{className:"form-text text-muted mb-3",children:["At least 8 characters\u2014the more characters, the better.",Object(a.jsx)("br",{})," A mixture of both uppercase and lowercase letters.",Object(a.jsx)("br",{})," A mixture of letters and numbers.",Object(a.jsx)("br",{})," Inclusion of at least one special character, e.g., ! @ # ? ]"]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"confirmPassword",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-rocket"})," Re-enter password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",required:!0,disabled:!this.passwordSecure(),onChange:this.handleChange})]}),Object(a.jsx)("div",{className:"alert alert-danger d-none mb-0 ",role:"alert",style:{fontSize:"0.9em"},children:this.state.error}),Object(a.jsx)("div",{className:"alert alert-success d-none mb-0 ",role:"alert",children:"Verification mail has been sent to your mail id."}),Object(a.jsxs)("div",{className:"form-group d-flex justify-content-between my-5 text-center",children:[Object(a.jsx)(o.b,{to:"/login",className:"text-decoration-none",children:Object(a.jsxs)("button",{type:"button",className:"btn btn-light text-primary",children:[Object(a.jsx)("span",{className:"fa fa-fw mr-2 fa-chevron-left"}),"Login"]})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-success shadow-sm px-3",disabled:!this.passwordSecure()||this.state.confirmPassword!==this.state.password,children:"Register"})]})]})]})]})}}]),s}(n.Component),y=function(e){Object(f.a)(s,e);var t=Object(x.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),window.rcv=new m.RecaptchaVerifier("captcha",{callback:function(e){m.sendPasswordResetEmail(a.state.email).then((function(){O()(".alert-success").removeClass("d-none")}))}}),window.rcv.render()},a.state={email:""},a}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Forgotpass text-center d-flex min-vh-100 p-2",children:Object(a.jsx)("div",{className:"container m-auto border rounded px-0 ",style:{width:"450px",borderColor:"#b9b9bd"},children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("div",{className:"font-weight-bold lead bg-light p-1 container-fluid",style:{fontSize:"1.3em",color:"#7aadcc"},children:Object(a.jsx)("span",{children:"Forgot Password"})}),Object(a.jsxs)("div",{className:"form-group m-3",children:[Object(a.jsx)("label",{className:"text-muted",htmlFor:"email",children:"Enter your Email"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"email",name:"email",id:"email",className:"form-control w-75 mx-auto border border-light shadow-sm",onChange:this.handleChange,style:{outline:"0",boxShadow:"none"}})]}),Object(a.jsx)("div",{id:"captcha",className:"d-flex justify-content-center p-2",children:""}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-info border-0 shadow m-2 mb-0",children:"Send link"})}),Object(a.jsx)("div",{class:"alert alert-success d-none m-2 w-75 mx-auto",role:"alert",style:{fontSize:"0.9em"},children:"Link to reset password has been sent to your mail id"}),Object(a.jsx)("div",{className:"form-group text-center",children:Object(a.jsx)(o.b,{to:"/login",className:"text-decoration-none ",children:Object(a.jsx)("button",{className:"btn btn-light",children:"Back to Login"})})})]})})})}}]),s}(r.a.Component),C=function(){return Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/login",component:v}),Object(a.jsx)(l.b,{exact:!0,path:"/register",component:N}),Object(a.jsx)(l.b,{exact:!0,path:"/forgot-password",component:y}),Object(a.jsx)(l.a,{to:"/login"})]})},S=function(e){Object(f.a)(s,e);var t=Object(x.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){O()("#interactive__section").height(O()("body").height()-O()("#infobar").outerHeight(!0))}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"Home",children:[Object(a.jsx)("p",{children:O()(window).height()}),Object(a.jsx)("p",{children:O()("#infobar").outerHeight(!0)}),Object(a.jsxs)("div",{id:"infobar",children:[Object(a.jsxs)("div",{className:"d-flex align-items-center justify-content-around",children:[Object(a.jsx)("p",{className:"p-0 m-0",children:m.currentUser.email}),Object(a.jsx)("button",{onClick:function(){return m.signOut()},type:"button",name:"sign__out",id:"sign__out",className:"btn btn- btn-sm shadow",children:"Sign out"})]}),Object(a.jsxs)("div",{id:"interactive__section",className:"d-flex bg-warning",children:[Object(a.jsx)("div",{className:"col-2 border",children:"Main panel"}),Object(a.jsx)("div",{className:"col-2 border",children:"Left panel"}),Object(a.jsx)("div",{className:"col-6 border",children:"Chat box"}),Object(a.jsx)("div",{className:"col-2 border",children:"Right panel"})]})]})]})}}]),s}(n.Component);m.onAuthStateChanged((function(e){e&&e.emailVerified?c.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(l.b,{component:S})}),document.getElementById("root")):c.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(l.b,{component:C})}),document.getElementById("root"))}))}},[[49,1,2]]]);