(this.webpackJsonpTalkio=this.webpackJsonpTalkio||[]).push([[0],{41:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var a=t(2),n=t(4),r=t(28),i=t.n(r),c=(t(39),t(40),t(41),t(15)),o=t(8),l=t(25),d=(l.a.initializeApp({apiKey:"AIzaSyBmDYViSp6gyW2jODsmiO_Nj9loa_VcAxs",authDomain:"talkio-82efd.firebaseapp.com",projectId:"talkio-82efd",storageBucket:"talkio-82efd.appspot.com",messagingSenderId:"157639179794",appId:"1:157639179794:web:c31e8827249b46f395e2cb",measurementId:"G-B7HM811T43"}),l.a.database(),l.a.auth()),m=t(24),j=t(18),b=t(19),f=t(21),h=t(20),u=t(13),p=t.n(u),x=t.p+"static/media/login.01849878.jpg",g=function(e){Object(f.a)(t,e);var s=Object(h.a)(t);function t(){var e;return Object(j.a)(this,t),(e=s.call(this)).handleChange=function(s){var t=s.target;e.setState(Object(m.a)({},t.name,t.value))},e.handleSubmit=function(s){s.preventDefault(),d.signInWithEmailAndPassword(e.state.email,e.state.password).then((function(s){s.user.emailVerified||d.signOut().then((function(){e.setState({error:"Please verify your Email address to proceed."}),p()(".alert-danger").removeClass("d-none"),p()("#resend__email__verification").show()}))})).catch((function(s){e.setState({error:s.message}),p()(".alert-danger").removeClass("d-none")}))},e.state={email:"",password:"",error:""},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"signin",className:"d-flex bg-white flex-xl-row min-vh-100 flex-column align-items-center noselect justify-content-center",children:[Object(a.jsx)("div",{className:"col-xl-6 col-12 bg- d-flex justify-content-center",children:Object(a.jsx)("img",{src:x,alt:"login",style:{height:"75vh"},className:""})}),Object(a.jsxs)("div",{className:"col-xl-5 col-12 d-flex flex-column justify-content-center",children:[Object(a.jsx)("h1",{className:"text-center mb-4",children:"Login"}),Object(a.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-envelope"})," Email"]}),Object(a.jsx)("input",{type:"email",className:"form-control border-0",id:"email",name:"email",autoComplete:"off",required:!0,placeholder:"Enter email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-asterisk"})," Password"]}),Object(a.jsx)("input",{type:"password",className:"form-control border-0",id:"password",name:"password",placeholder:"Enter password",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsx)(c.b,{to:"/forgot-password",children:"Forgot password"}),Object(a.jsx)(c.b,{to:"/register",children:"Register"})]}),Object(a.jsx)("div",{class:"alert alert-danger d-none mt-2",role:"alert",children:this.state.error}),Object(a.jsx)("div",{className:"text-center my-3",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success shadow-sm",children:"Login"})}),Object(a.jsx)("div",{id:"resend__email__verification",style:{display:"none"},onClick:function(){d.signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){alert("logged in"),e.user.sendEmailVerification().finally((function(){d.signOut().finally((function(){alert("Verification link resent.")}))}))}))},children:"Resend verification mail"})]})]})]})}}]),t}(n.Component),O=t.p+"static/media/register.66be7dfa.jpg",w=function(e){Object(f.a)(t,e);var s=Object(h.a)(t);function t(){var e;return Object(j.a)(this,t),(e=s.call(this)).passwordSecure=function(){return!!e.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/)},e.handleChange=function(s){var t=s.target;e.setState(Object(m.a)({},s.target.name,s.target.value),(function(){"password"===t.name&&(e.passwordSecure()&&e.state.password===e.state.confirmPassword?p()("#confirmPassword").removeClass("is-invalid").addClass("is-valid"):p()("#confirmPassword").addClass("is-invalid").removeClass("is-valid"),e.passwordSecure()?p()("#password").removeClass("is-invalid").addClass("is-valid"):p()("#password").addClass("is-invalid").removeClass("is-valid")),"confirmPassword"===t.name&&(e.passwordSecure()&&e.state.password===e.state.confirmPassword?p()("#confirmPassword").removeClass("is-invalid").addClass("is-valid"):p()("#confirmPassword").addClass("is-invalid").removeClass("is-valid"))}))},e.state={email:"",password:"",confirmPassword:"",error:""},e}return Object(b.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"signup",className:"min-vh-100 bg-white d-flex flex-xl-row flex-column mx-auto align-items-center justify-content-center",children:[Object(a.jsx)("div",{className:"col-xl-6 col-12 bg- d-flex justify-content-center",children:Object(a.jsx)("img",{src:O,alt:"login",style:{height:"75vh"},className:""})}),Object(a.jsxs)("div",{className:"col-xl-5 col-12 d-flex flex-column justify-content-center",children:[Object(a.jsx)("h1",{style:{fontFamily:"SF Pro Rounded",fontWeight:"bold"},className:"text-center mb-4",children:" Register "}),Object(a.jsxs)("form",{autoComplete:"off",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-envelope"})," Email"]}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",required:!0,autoFocus:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-asterisk"})," Password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("small",{className:"form-text text-muted mb-3",children:["At least 8 characters\u2014the more characters, the better.",Object(a.jsx)("br",{})," A mixture of both uppercase and lowercase letters.",Object(a.jsx)("br",{})," A mixture of letters and numbers.",Object(a.jsx)("br",{})," Inclusion of at least one special character, e.g., ! @ # ? ]"]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"confirmPassword",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-rocket"})," Re-enter password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",required:!0,disabled:!this.passwordSecure(),onChange:this.handleChange})]}),Object(a.jsx)("div",{class:"alert alert-danger d-none mb-0 ",role:"alert",style:{fontSize:"0.9em"},children:this.state.error}),Object(a.jsx)("div",{class:"alert alert-success d-none mb-0 ",role:"alert",children:"Verification mail has been sent to your mail id."}),Object(a.jsxs)("div",{className:"form-group d-flex justify-content-between my-5 text-center",children:[Object(a.jsx)(c.b,{to:"/login",className:"text-decoration-none",children:Object(a.jsxs)("button",{className:"btn btn-light text-primary",children:[Object(a.jsx)("span",{className:"fa fa-fw mr-2 fa-chevron-left"}),"Login"]})}),Object(a.jsx)("button",{className:"btn btn-success shadow-sm px-3",disabled:!this.passwordSecure()||this.state.confirmPassword!==this.state.password,children:"Register"})]})]})]})]})}}]),t}(n.Component),v=function(e){Object(f.a)(t,e);var s=Object(h.a)(t);function t(){return Object(j.a)(this,t),s.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Forgot password"})})}}]),t}(n.Component),y=function(){return Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{exact:!0,path:"/login",component:g}),Object(a.jsx)(o.b,{exact:!0,path:"/register",component:w}),Object(a.jsx)(o.b,{exact:!0,path:"/forgot-password",component:v}),Object(a.jsx)(o.a,{to:"/login"})]})};d.onAuthStateChanged((function(e){e?e.emailVerified?i.a.render(Object(a.jsxs)(c.a,{basename:"/Talkio",children:[Object(a.jsx)("p",{children:d.currentUser.displayName}),Object(a.jsx)("button",{onClick:function(){return d.signOut()},type:"button",name:"sign__out",id:"sign__out",class:"btn btn-primary btn-lg btn-block",children:"Sign out"})]}),document.getElementById("root")):(console.log("user not verified"),d.signOut()):i.a.render(Object(a.jsx)(c.a,{basename:"/Talkio",children:Object(a.jsx)(o.b,{component:y})}),document.getElementById("root"))}))}},[[49,1,2]]]);