(this.webpackJsonpchat_app=this.webpackJsonpchat_app||[]).push([[0],{41:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var a=t(2),n=t(4),r=t(28),i=t.n(r),c=(t(39),t(40),t(41),t(15)),o=t(25),l=(o.a.initializeApp({apiKey:"AIzaSyBmDYViSp6gyW2jODsmiO_Nj9loa_VcAxs",authDomain:"talkio-82efd.firebaseapp.com",projectId:"talkio-82efd",storageBucket:"talkio-82efd.appspot.com",messagingSenderId:"157639179794",appId:"1:157639179794:web:c31e8827249b46f395e2cb",measurementId:"G-B7HM811T43"}),o.a.database(),o.a.auth()),d=t(24),m=t(18),j=t(19),b=t(21),f=t(20),h=t(13),u=t.n(h),p=t.p+"static/media/login.01849878.jpg",x=function(e){Object(b.a)(t,e);var s=Object(f.a)(t);function t(){var e;return Object(m.a)(this,t),(e=s.call(this)).handleChange=function(s){var t=s.target;e.setState(Object(d.a)({},t.name,t.value))},e.handleSubmit=function(s){s.preventDefault(),l.signInWithEmailAndPassword(e.state.email,e.state.password).then((function(s){s.user.emailVerified||l.signOut().then((function(){e.setState({error:"Please verify your Email address to proceed."}),u()(".alert-danger").removeClass("d-none"),u()("#resend__email__verification").show()}))})).catch((function(s){e.setState({error:s.message}),u()(".alert-danger").removeClass("d-none")}))},e.state={email:"",password:"",error:""},e}return Object(j.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{id:"signin",className:"d-flex bg-white flex-xl-row min-vh-100 flex-column align-items-center noselect justify-content-center",children:[Object(a.jsx)("div",{className:"col-xl-6 col-12 bg- d-flex justify-content-center",children:Object(a.jsx)("img",{src:p,alt:"login",style:{height:"75vh"},className:""})}),Object(a.jsxs)("div",{className:"col-xl-5 col-12 d-flex flex-column justify-content-center",children:[Object(a.jsx)("h1",{className:"text-center mb-4",children:"Login"}),Object(a.jsxs)("form",{autoComplete:"off",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-envelope"})," Email"]}),Object(a.jsx)("input",{type:"email",className:"form-control border-0",id:"email",name:"email",autoComplete:"off",required:!0,placeholder:"Enter email",onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-asterisk"})," Password"]}),Object(a.jsx)("input",{type:"password",className:"form-control border-0",id:"password",name:"password",placeholder:"Enter password",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsx)(c.b,{to:"/forgot-password",children:"Forgot password"}),Object(a.jsx)(c.b,{to:"/register",children:"Register"})]}),Object(a.jsx)("div",{class:"alert alert-danger d-none mt-2",role:"alert",children:this.state.error}),Object(a.jsx)("div",{className:"text-center my-3",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success shadow-sm",children:"Login"})}),Object(a.jsx)("div",{id:"resend__email__verification",style:{display:"none"},onClick:function(){l.signInWithEmailAndPassword(e.state.email,e.state.password).then((function(e){alert("logged in"),e.user.sendEmailVerification().finally((function(){l.signOut().finally((function(){alert("Verification link resent.")}))}))}))},children:"Resend verification mail"})]})]})]})}}]),t}(n.Component),O=t.p+"static/media/register.66be7dfa.jpg",g=function(e){Object(b.a)(t,e);var s=Object(f.a)(t);function t(){var e;return Object(m.a)(this,t),(e=s.call(this)).passwordSecure=function(){return!!e.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/)},e.handleChange=function(s){var t=s.target;e.setState(Object(d.a)({},s.target.name,s.target.value),(function(){"password"===t.name&&(e.passwordSecure()&&e.state.password===e.state.confirmPassword?u()("#confirmPassword").removeClass("is-invalid").addClass("is-valid"):u()("#confirmPassword").addClass("is-invalid").removeClass("is-valid"),e.passwordSecure()?u()("#password").removeClass("is-invalid").addClass("is-valid"):u()("#password").addClass("is-invalid").removeClass("is-valid")),"confirmPassword"===t.name&&(e.passwordSecure()&&e.state.password===e.state.confirmPassword?u()("#confirmPassword").removeClass("is-invalid").addClass("is-valid"):u()("#confirmPassword").addClass("is-invalid").removeClass("is-valid"))}))},e.state={email:"",password:"",confirmPassword:"",error:""},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"signup",className:"min-vh-100 bg-white d-flex flex-xl-row flex-column mx-auto align-items-center justify-content-center",children:[Object(a.jsx)("div",{className:"col-xl-6 col-12 bg- d-flex justify-content-center",children:Object(a.jsx)("img",{src:O,alt:"login",style:{height:"75vh"},className:""})}),Object(a.jsxs)("div",{className:"col-xl-5 col-12 d-flex flex-column justify-content-center",children:[Object(a.jsx)("h1",{style:{fontFamily:"SF Pro Rounded",fontWeight:"bold"},className:"text-center mb-4",children:" Register "}),Object(a.jsxs)("form",{autoComplete:"off",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"email",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-envelope"})," Email"]}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",required:!0,autoFocus:!0,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"password",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-asterisk"})," Password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",required:!0,onChange:this.handleChange})]}),Object(a.jsxs)("small",{className:"form-text text-muted mb-3",children:["At least 8 characters\u2014the more characters, the better.",Object(a.jsx)("br",{})," A mixture of both uppercase and lowercase letters.",Object(a.jsx)("br",{})," A mixture of letters and numbers.",Object(a.jsx)("br",{})," Inclusion of at least one special character, e.g., ! @ # ? ]"]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsxs)("label",{htmlFor:"confirmPassword",children:[Object(a.jsx)("i",{className:"fa fa-fw fa-rocket"})," Re-enter password"]}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",name:"confirmPassword",required:!0,disabled:!this.passwordSecure(),onChange:this.handleChange})]}),Object(a.jsx)("div",{class:"alert alert-danger d-none mb-0 ",role:"alert",style:{fontSize:"0.9em"},children:this.state.error}),Object(a.jsx)("div",{class:"alert alert-success d-none mb-0 ",role:"alert",children:"Verification mail has been sent to your mail id."}),Object(a.jsxs)("div",{className:"form-group d-flex justify-content-between my-5 text-center",children:[Object(a.jsx)(c.b,{to:"/login",className:"text-decoration-none",children:Object(a.jsxs)("button",{className:"btn btn-light text-primary",children:[Object(a.jsx)("span",{className:"fa fa-fw mr-2 fa-chevron-left"}),"Login"]})}),Object(a.jsx)("button",{className:"btn btn-success shadow-sm px-3",disabled:!this.passwordSecure()||this.state.confirmPassword!==this.state.password,children:"Register"})]})]})]})]})}}]),t}(n.Component),w=function(e){Object(b.a)(t,e);var s=Object(f.a)(t);function t(){return Object(m.a)(this,t),s.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Forgot password"})})}}]),t}(n.Component),v=t(8),y=function(){return Object(a.jsxs)(v.d,{children:[Object(a.jsx)(v.b,{path:"/login",component:x}),Object(a.jsx)(v.b,{path:"/register",component:g}),Object(a.jsx)(v.b,{path:"/forgot-password",component:w}),Object(a.jsx)(v.b,{render:function(){return Object(a.jsx)(v.a,{to:"/"})}})]})};l.onAuthStateChanged((function(e){e?e.emailVerified?i.a.render(Object(a.jsxs)(c.a,{children:[Object(a.jsx)("p",{children:l.currentUser.displayName}),Object(a.jsx)("button",{onClick:function(){return l.signOut()},type:"button",name:"sign__out",id:"sign__out",class:"btn btn-primary btn-lg btn-block",children:"Sign out"})]}),document.getElementById("root")):(console.log("user not verified"),l.signOut()):i.a.render(Object(a.jsx)(c.a,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}))}},[[49,1,2]]]);