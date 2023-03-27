"use strict";(self.webpackChunkphonebook_app=self.webpackChunkphonebook_app||[]).push([[796],{796:function(n,e,r){r.r(e);var t=r(2010),o=r(3682),i=r(3329);e.default=function(){return(0,i.jsx)(o.x,{width:"100%",display:"flex",justifyContent:"center",alignContent:"center",children:(0,i.jsx)(t.B,{})})}},2010:function(n,e,r){r.d(e,{B:function(){return P}});var t,o,i,a,s,c=r(9439),u=r(2791),l=r(9434),m=r(7689),d=r(5705),f=r(5218),h=r(6355),p=r(6422),x=r(2609),b=r(3682),g=r(1347),w=r(2299),y=r(168),v=r(6444),j=r(1087),Z=(0,v.ZP)(d.l0)(t||(t=(0,y.Z)(["\n  width: 400px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding: ","px;\n  color: ",";\n  background-color: ",";\n  border: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  transition: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.shadows.main}),(function(n){return n.theme.transitions.common})),k=v.ZP.label(o||(o=(0,y.Z)(["\n  position: relative;\n  width: calc(100% - 24px);\n  font-size: ",";\n  font-weight: ",";\n  transition: ",";\n  &:focus-within {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.transitions.color}),(function(n){return n.theme.colors.textActive})),S=(0,v.ZP)(d.gN)(i||(i=(0,y.Z)(["\n  width: 100%;\n  display: block;\n  font-size: ",";\n  font-weight: ",";\n  margin-top: ","px;\n  padding: ","px;\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n  border-color: transparent;\n  outline: transparent;\n  transition: ",";\n  &:focus,\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.textActive}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.transitions.all}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.outline})),z=(0,v.ZP)(j.rU)(a||(a=(0,y.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  transition: ",";\n  &:focus,\n  &:hover {\n    color: ",";\n    text-decoration: none;\n  }\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.color}),(function(n){return n.theme.colors.textActive})),T=v.ZP.button(s||(s=(0,y.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 0px;\n  margin: ","px;\n  padding: ","px;\n  transform: translateY(10%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  cursor: pointer;\n  border: ",";\n  color: #b2bac2;\n  transition: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.transitions.all})),q=r(3329),P=function(){var n=(0,u.useState)(!1),e=(0,c.Z)(n,2),r=e[0],t=e[1],o=(0,l.v9)(p.xU),i=(0,l.I0)(),a=(0,m.TH)().pathname,s={btnTitle:"/register"===a?"Sign in":"Log in",path:"/register"===a?"/login":"/register",text:"/register"===a?"Already have an account?":"Don't have an account?",title:"/register"===a?"Log in":"Sign in"},y=s.btnTitle,v=s.path,j=s.text,P=s.title;return(0,q.jsx)(d.J9,{initialValues:{name:"",email:"",password:""},onSubmit:function(n,e){var r=n.name,t=n.email,o=n.password,s=e.resetForm;switch(a){case"/register":i((0,g.z2)({name:r,email:t,password:o})).then((function(n){return n.error?f.ZP.error(w.nQ[n.payload]):s()}));break;case"/login":i((0,g.x4)({email:t,password:o})).then((function(n){return n.error?f.ZP.error(w.nQ[n.payload]):s()}));break;default:return}},validationSchema:"/register"===a?w.FB:w.k,validateOnBlur:!0,children:function(n){var e=n.errors,i=n.touched,s=n.isValid,c=n.dirty;return(0,q.jsxs)(Z,{children:["/register"===a&&(0,q.jsxs)(k,{htmlFor:"name",children:["Name",(0,q.jsx)(S,{type:"text",name:"name"}),e.name&&i.name?(0,q.jsx)(b.x,{fontSize:"xs",color:"red",mt:2,children:e.name}):null]}),(0,q.jsxs)(k,{htmlFor:"email",children:["Email",(0,q.jsx)(S,{type:"email",name:"email"}),e.email&&i.email?(0,q.jsx)(b.x,{fontSize:"xs",color:"red",mt:2,children:e.email}):null]}),(0,q.jsxs)(k,{htmlFor:"password",children:["Password",(0,q.jsx)(S,{type:r?"text":"password",name:"password"}),(0,q.jsx)(T,{type:"button",onClick:function(){return t(!r)},children:r?(0,q.jsx)(h.dSq,{size:"24px"}):(0,q.jsx)(h.tgn,{size:"24px"})}),e.password&&i.password?(0,q.jsx)(b.x,{fontSize:"xs",color:"red",mt:2,children:e.password}):null]}),(0,q.jsx)(x.z,{type:"submit",name:"button",disabled:o||!s||!c,children:y}),(0,q.jsxs)(b.x,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",gridGap:"2",children:[(0,q.jsx)(b.x,{as:"p",fontSize:"s",m:0,fontWeight:"regular",color:"text",children:j}),(0,q.jsx)(z,{to:v,children:P})]})]})}})}},2609:function(n,e,r){r.d(e,{z:function(){return i}});var t,o=r(168),i=r(6444).ZP.button(t||(t=(0,o.Z)(["\n  align-self: center;\n  padding: ","px ","px;\n  font-size: ",";\n  font-weight: ",";\n  border-radius: ",";\n  background-color: ",";\n  border: ",";\n  color: ",";\n  outline: transparent;\n  scale: 1;\n  cursor: pointer;\n  transition: ",";\n  &:focus:not(:disabled),\n  &:hover:not(:disabled) {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n    ",";\n    ",";\n  }\n  &:disabled {\n    color: #b2bac2;\n    border-color: #b2bac2;\n    cursor: not-allowed;\n  }\n  &:active:not(:disabled) {\n    scale: 0.9;\n  }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.radii.big}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transitions.all}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.outline}),(function(n){return n.theme.colors.textActive}),(function(n){return"delete"===n.name&&"background-color: #ff4848cd; color: #ffffff; border-color: #ff0000"}),(function(n){return"cancel"===n.name&&"background-color: #ff4848cd; color: #ffffff; border-color: #ff0000"}))},2299:function(n,e,r){r.d(e,{nQ:function(){return t},ie:function(){return p},k:function(){return h},FB:function(){return f}});var t={400:"BAD REQUEST",401:"Wrong email or password. Try again!",404:"NOT FOUND",409:"A user with this email address or name is already registered. Please log in or enter a different email address",500:"A connection error occurred. Please contact the support service"},o=r(2797),i="The name must contain only letters, spaces and dashes",a="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",s="Is not valid email. The email must be for example: email@example.com",c="So short?! It's okay, we won't tell anyone about this. But let's make the name a little longer",u="Wow!!! Who are you warrior?!?! Max 30 symbols!",l=/^([a-zA-Z-]\s?)*$/,m=/^\+?[0-9]{0,3}?\s?\(?[0-9]{0,3}?\)?[0-9\s?\-?]*$/,d=/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,f=o.Ry().shape({email:o.Z_().required("Required").email(s,d),password:o.Z_().required("Required").min(6,"Too Short! Min 6 symbols!").max(10,"Too Long! Max 10 symbols!"),name:o.Z_().required("Required").min(2,c).max(30,u)}),h=o.Ry().shape({email:o.Z_().required("Required").email(s,d),password:o.Z_().required("Required").min(6,"Too Short! Min 6 symbols!").max(10,"Too Long! Max 10 symbols!")}),p=o.Ry().shape({name:o.Z_().required("Required").min(2,"Too Short! Min 2 symbols!").max(30,"Too Long! Max 30 symbols!").matches(l,i),phone:o.Z_().required("Required").min(10,"Too Short! Min 10 symbols!").max(20,"Too Long! Max 20 symbols!").matches(m,a)})},6422:function(n,e,r){r.d(e,{AD:function(){return o},Af:function(){return t},bn:function(){return a},xU:function(){return i}});var t=function(n){return n.contacts.items},o=function(n){return n.filter},i=function(n){return n.contacts.isLoading},a=function(n){var e=t(n),r=o(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))}}}]);
//# sourceMappingURL=796.4783bc0b.chunk.js.map