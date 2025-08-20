import{j as r}from"./jsx-runtime-e7d94ccb.js";import{r as t}from"./index-981f9478.js";import{c as N}from"./clsx-0839fdbe.js";const w=({value:e,onChange:s,label:l,placeholder:f,helperText:y,errorMessage:n,disabled:T=!1,invalid:C=!1,variant:b="outlined",size:j="md",type:q="text",name:K,id:Q,className:U,showClear:X=!1,showPasswordToggle:Z=!1,loading:o=!1})=>{const ee=t.useId(),v=Q??ee,[h,re]=t.useState(q),ae="block w-full rounded-md focus:outline-none transition-colors disabled:cursor-not-allowed",se=t.useMemo(()=>{switch(j){case"sm":return"text-sm py-1.5 px-2";case"lg":return"text-base py-3 px-4";default:return"text-sm py-2.5 px-3"}},[j]),te=t.useMemo(()=>b==="filled"?"bg-gray-100 dark:bg-gray-800 border border-transparent focus:ring-2 focus:ring-blue-500":b==="ghost"?"bg-transparent border border-transparent focus:ring-2 focus:ring-blue-500":"bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500",[b]),le=N(ae,se,te,C?"border-red-500 focus:ring-red-500":"",o&&"opacity-60 cursor-wait",U),I=y||n?`${v}-desc`:void 0,ne=x=>{if(T)return;const ie={value:""};s==null||s({...x,target:ie})},oe=q==="password"||h==="password";return r.jsxs("div",{className:"w-full",children:[l&&r.jsx("label",{htmlFor:v,className:"mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200",children:l}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{id:v,name:K,type:h,value:e,onChange:s,placeholder:f,className:le,disabled:T||o,"aria-invalid":C||void 0,"aria-describedby":I}),X&&e&&e.length>0&&!o&&r.jsx("button",{type:"button",onClick:ne,className:"absolute inset-y-0 right-2 my-auto h-6 w-6 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800","aria-label":"Clear input",children:"×"}),Z&&oe&&!o&&r.jsx("button",{type:"button",onClick:()=>re(x=>x==="password"?"text":"password"),className:"absolute inset-y-0 right-8 my-auto h-6 px-2 rounded text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800","aria-label":"Toggle password visibility",children:h==="password"?"Show":"Hide"})]}),(y||n)&&r.jsx("p",{id:I,className:N("mt-1 text-xs",n?"text-red-600":"text-gray-500"),children:n||y})]})};w.__docgenInfo={description:`InputField is a flexible, accessible input component with label, helper text, and validation states.\r
It supports variants (filled, outlined, ghost), sizes, disabled/invalid/loading states, and optional clear/password toggle.`,methods:[],displayName:"InputField",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'number' | 'search'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},showClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showPasswordToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const me={title:"Components/InputField",component:w,args:{label:"Email",placeholder:"you@example.com",variant:"outlined",size:"md"}},a=e=>{const[s,l]=t.useState("");return r.jsx(w,{...e,value:s,onChange:f=>l(f.target.value)})},i={render:e=>r.jsx(a,{...e})},d={args:{variant:"filled"},render:e=>r.jsx(a,{...e})},u={args:{variant:"ghost"},render:e=>r.jsx(a,{...e})},c={args:{label:"Name",placeholder:"Your name"},render:e=>r.jsxs("div",{className:"space-y-3",children:[r.jsx(a,{...e,size:"sm"}),r.jsx(a,{...e,size:"md"}),r.jsx(a,{...e,size:"lg"})]})},p={args:{helperText:"We will never share your email."},render:e=>r.jsxs("div",{className:"space-y-3",children:[r.jsx(a,{...e}),r.jsx(a,{...e,invalid:!0,errorMessage:"Email is required"})]})},m={args:{showClear:!0,showPasswordToggle:!0,type:"password",label:"Password"},render:e=>r.jsx(a,{...e})},g={args:{label:"Loading",loading:!0,placeholder:"Fetching..."},render:e=>r.jsx(a,{...e})};var E,S,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var z,F,V;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  },
  render: args => <Controlled {...args} />
}`,...(V=(F=d.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var P,L,H;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: args => <Controlled {...args} />
}`,...(H=(L=u.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var W,M,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Your name'
  },
  render: args => <div className="space-y-3">\r
            <Controlled {...args} size="sm" />\r
            <Controlled {...args} size="md" />\r
            <Controlled {...args} size="lg" />\r
        </div>
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var R,_,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    helperText: 'We will never share your email.'
  },
  render: args => <div className="space-y-3">\r
            <Controlled {...args} />\r
            <Controlled {...args} invalid errorMessage="Email is required" />\r
        </div>
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var G,Y,B;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    showClear: true,
    showPasswordToggle: true,
    type: 'password',
    label: 'Password'
  },
  render: args => <Controlled {...args} />
}`,...(B=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var $,D,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Loading',
    loading: true,
    placeholder: 'Fetching...'
  },
  render: args => <Controlled {...args} />
}`,...(J=(D=g.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};const ge=["Outlined","Filled","Ghost","Sizes","WithHelperAndError","WithClearAndPasswordToggle","Loading"];export{d as Filled,u as Ghost,g as Loading,i as Outlined,c as Sizes,m as WithClearAndPasswordToggle,p as WithHelperAndError,ge as __namedExportsOrder,me as default};
