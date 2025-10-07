import{c as f,e as w,v as Se,a as u,w as ct,N as ut,x as pe,y as Eo,z as Lo,A as Io,d as ht,C as _e,b as B,D as ue,r as Vo,E as be,S as Oo,V as Ho,g as Me,F as No,u as ft,G as bt,H as pt,I as ve,J as jo,h as vt,o as Ne,K as $,l as Ze,L as Ko,M as Uo,O as Go,_ as qo,B as Yo,m as Xo,n as Jo,p as Zo,q as Qo,s as er}from"./person-2-C7_0FDfi.js";import{u as tr,_ as Qe,a as et,b as tt,c as ot,d as rt,e as nt,f as at,S as or}from"./award-7-C085Xe03.js";import{_ as rr,a as nr}from"./phone-B13L8-zT.js";import{i as Te,a as V,J as mt,d as O,h as s,g as me,c as gt,r as A,l as je,G as ar,u as Ge,K as Ke,b as ir,L as lr,j as it,p as sr,n as lt,s as dr,q as cr,x as ne,y as Q,z as U,B as o,E as m,C as ee,D as ae,M as st,m as ur,A as hr}from"./index-BRS5Io9P.js";import{_ as fr}from"./_plugin-vue_export-helper-DlAUqK2U.js";const br={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"},Heatmap:{less:"less",more:"more",monthFormat:"MMM",weekdayFormat:"eee"}};function He(e){return(a={})=>{const l=a.width?String(a.width):e.defaultWidth;return e.formats[l]||e.formats[e.defaultWidth]}}function he(e){return(a,l)=>{const c=l?.context?String(l.context):"standalone";let i;if(c==="formatting"&&e.formattingValues){const d=e.defaultFormattingWidth||e.defaultWidth,n=l?.width?String(l.width):d;i=e.formattingValues[n]||e.formattingValues[d]}else{const d=e.defaultWidth,n=l?.width?String(l.width):e.defaultWidth;i=e.values[n]||e.values[d]}const p=e.argumentCallback?e.argumentCallback(a):a;return i[p]}}function fe(e){return(a,l={})=>{const c=l.width,i=c&&e.matchPatterns[c]||e.matchPatterns[e.defaultMatchWidth],p=a.match(i);if(!p)return null;const d=p[0],n=c&&e.parsePatterns[c]||e.parsePatterns[e.defaultParseWidth],g=Array.isArray(n)?vr(n,C=>C.test(d)):pr(n,C=>C.test(d));let v;v=e.valueCallback?e.valueCallback(g):g,v=l.valueCallback?l.valueCallback(v):v;const x=a.slice(d.length);return{value:v,rest:x}}}function pr(e,a){for(const l in e)if(Object.prototype.hasOwnProperty.call(e,l)&&a(e[l]))return l}function vr(e,a){for(let l=0;l<e.length;l++)if(a(e[l]))return l}function mr(e){return(a,l={})=>{const c=a.match(e.matchPattern);if(!c)return null;const i=c[0],p=a.match(e.parsePattern);if(!p)return null;let d=e.valueCallback?e.valueCallback(p[0]):p[0];d=l.valueCallback?l.valueCallback(d):d;const n=a.slice(i.length);return{value:d,rest:n}}}const gr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},xr=(e,a,l)=>{let c;const i=gr[e];return typeof i=="string"?c=i:a===1?c=i.one:c=i.other.replace("{{count}}",a.toString()),l?.addSuffix?l.comparison&&l.comparison>0?"in "+c:c+" ago":c},wr={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yr=(e,a,l,c)=>wr[e],Cr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},kr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},_r={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Sr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Mr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Tr=(e,a)=>{const l=Number(e),c=l%100;if(c>20||c<10)switch(c%10){case 1:return l+"st";case 2:return l+"nd";case 3:return l+"rd"}return l+"th"},zr={ordinalNumber:Tr,era:he({values:Cr,defaultWidth:"wide"}),quarter:he({values:kr,defaultWidth:"wide",argumentCallback:e=>e-1}),month:he({values:_r,defaultWidth:"wide"}),day:he({values:Pr,defaultWidth:"wide"}),dayPeriod:he({values:Sr,defaultWidth:"wide",formattingValues:Mr,defaultFormattingWidth:"wide"})},Fr=/^(\d+)(th|st|nd|rd)?/i,Dr=/\d+/i,$r={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ar={any:[/^b/i,/^(a|c)/i]},Rr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Br={any:[/1/i,/2/i,/3/i,/4/i]},Wr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Er={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Lr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ir={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Vr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Or={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Hr={ordinalNumber:mr({matchPattern:Fr,parsePattern:Dr,valueCallback:e=>parseInt(e,10)}),era:fe({matchPatterns:$r,defaultMatchWidth:"wide",parsePatterns:Ar,defaultParseWidth:"any"}),quarter:fe({matchPatterns:Rr,defaultMatchWidth:"wide",parsePatterns:Br,defaultParseWidth:"any",valueCallback:e=>e+1}),month:fe({matchPatterns:Wr,defaultMatchWidth:"wide",parsePatterns:Er,defaultParseWidth:"any"}),day:fe({matchPatterns:Lr,defaultMatchWidth:"wide",parsePatterns:Ir,defaultParseWidth:"any"}),dayPeriod:fe({matchPatterns:Vr,defaultMatchWidth:"any",parsePatterns:Or,defaultParseWidth:"any"})},Nr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},jr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Kr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ur={date:He({formats:Nr,defaultWidth:"full"}),time:He({formats:jr,defaultWidth:"full"}),dateTime:He({formats:Kr,defaultWidth:"full"})},Gr={code:"en-US",formatDistance:xr,formatLong:Ur,formatRelative:yr,localize:zr,match:Hr,options:{weekStartsOn:0,firstWeekContainsDate:1}},qr={name:"en-US",locale:Gr};function Yr(e){const{mergedLocaleRef:a,mergedDateLocaleRef:l}=Te(mt,null)||{},c=V(()=>{var p,d;return(d=(p=a?.value)===null||p===void 0?void 0:p[e])!==null&&d!==void 0?d:br[e]});return{dateLocaleRef:V(()=>{var p;return(p=l?.value)!==null&&p!==void 0?p:qr}),localeRef:c}}const Xr=f("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[w("svg",`
 height: 1em;
 width: 1em;
 `)]),Pe=O({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Se("-base-icon",Xr,me(e,"clsPrefix"))},render(){return s("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}});function Jr(e,a){const l=O({render(){return a()}});return O({name:tr(e),setup(){var c;const i=(c=Te(mt,null))===null||c===void 0?void 0:c.mergedIconsRef;return()=>{var p;const d=(p=i?.value)===null||p===void 0?void 0:p[e];return d?d():s(l,null)}}})}const Zr=O({name:"ChevronDown",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Qr=Jr("clear",()=>s("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},s("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},s("g",{fill:"currentColor","fill-rule":"nonzero"},s("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),en=O({name:"Eye",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),s("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),tn=O({name:"EyeOff",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),s("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),s("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),s("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),s("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),on=f("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[w(">",[u("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[w("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),w("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),u("placeholder",`
 display: flex;
 `),u("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ct({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ue=O({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Se("-base-clear",on,me(e,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:e}=this;return s("div",{class:`${e}-base-clear`},s(ut,null,{default:()=>{var a,l;return this.show?s("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},pe(this.$slots.icon,()=>[s(Pe,{clsPrefix:e},{default:()=>s(Qr,null)})])):s("div",{key:"icon",class:`${e}-base-clear__placeholder`},(l=(a=this.$slots).placeholder)===null||l===void 0?void 0:l.call(a))}}))}}),rn=O({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:a}){return()=>{const{clsPrefix:l}=e;return s(Eo,{clsPrefix:l,class:`${l}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?s(Ue,{clsPrefix:l,show:e.showClear,onClear:e.onClear},{placeholder:()=>s(Pe,{clsPrefix:l,class:`${l}-base-suffix__arrow`},{default:()=>pe(a.default,()=>[s(Zr,null)])})}):null})}}}),nn={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};function an(e){const{textColor2:a,textColor3:l,textColorDisabled:c,primaryColor:i,primaryColorHover:p,inputColor:d,inputColorDisabled:n,borderColor:g,warningColor:v,warningColorHover:x,errorColor:C,errorColorHover:M,borderRadius:_,lineHeight:b,fontSizeTiny:k,fontSizeSmall:z,fontSizeMedium:W,fontSizeLarge:E,heightTiny:N,heightSmall:K,heightMedium:L,heightLarge:y,actionColor:D,clearColor:F,clearColorHover:R,clearColorPressed:I,placeholderColor:j,placeholderColorDisabled:H,iconColor:ie,iconColorDisabled:le,iconColorHover:G,iconColorPressed:se,fontWeight:q}=e;return Object.assign(Object.assign({},nn),{fontWeight:q,countTextColorDisabled:c,countTextColor:l,heightTiny:N,heightSmall:K,heightMedium:L,heightLarge:y,fontSizeTiny:k,fontSizeSmall:z,fontSizeMedium:W,fontSizeLarge:E,lineHeight:b,lineHeightTextarea:b,borderRadius:_,iconSize:"16px",groupLabelColor:D,groupLabelTextColor:a,textColor:a,textColorDisabled:c,textDecorationColor:a,caretColor:i,placeholderColor:j,placeholderColorDisabled:H,color:d,colorDisabled:n,colorFocus:d,groupLabelBorder:`1px solid ${g}`,border:`1px solid ${g}`,borderHover:`1px solid ${p}`,borderDisabled:`1px solid ${g}`,borderFocus:`1px solid ${p}`,boxShadowFocus:`0 0 0 2px ${_e(i,{alpha:.2})}`,loadingColor:i,loadingColorWarning:v,borderWarning:`1px solid ${v}`,borderHoverWarning:`1px solid ${x}`,colorFocusWarning:d,borderFocusWarning:`1px solid ${x}`,boxShadowFocusWarning:`0 0 0 2px ${_e(v,{alpha:.2})}`,caretColorWarning:v,loadingColorError:C,borderError:`1px solid ${C}`,borderHoverError:`1px solid ${M}`,colorFocusError:d,borderFocusError:`1px solid ${M}`,boxShadowFocusError:`0 0 0 2px ${_e(C,{alpha:.2})}`,caretColorError:C,clearColor:F,clearColorHover:R,clearColorPressed:I,iconColor:ie,iconColorDisabled:le,iconColorHover:G,iconColorPressed:se,suffixTextColor:a})}const ln=Lo({name:"Input",common:ht,peers:{Scrollbar:Io},self:an}),xt=gt("n-input"),sn=f("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[u("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),u("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),u("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[w("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),w("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),w("&:-webkit-autofill ~",[u("placeholder","display: none;")])]),B("round",[ue("textarea","border-radius: calc(var(--n-height) / 2);")]),u("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[w("span",`
 width: 100%;
 display: inline-block;
 `)]),B("textarea",[u("placeholder","overflow: visible;")]),ue("autosize","width: 100%;"),B("autosize",[u("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),f("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),u("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),u("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[w("&[type=password]::-ms-reveal","display: none;"),w("+",[u("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),ue("textarea",[u("placeholder","white-space: nowrap;")]),u("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),B("textarea","width: 100%;",[f("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),B("resizable",[f("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),u("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),u("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),B("pair",[u("input-el, placeholder","text-align: center;"),u("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[f("icon",`
 color: var(--n-icon-color);
 `),f("base-icon",`
 color: var(--n-icon-color);
 `)])]),B("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[u("border","border: var(--n-border-disabled);"),u("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),u("placeholder","color: var(--n-placeholder-color-disabled);"),u("separator","color: var(--n-text-color-disabled);",[f("icon",`
 color: var(--n-icon-color-disabled);
 `),f("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),f("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),u("suffix, prefix","color: var(--n-text-color-disabled);",[f("icon",`
 color: var(--n-icon-color-disabled);
 `),f("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),ue("disabled",[u("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[w("&:hover",`
 color: var(--n-icon-color-hover);
 `),w("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),w("&:hover",[u("state-border","border: var(--n-border-hover);")]),B("focus","background-color: var(--n-color-focus);",[u("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),u("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),u("state-border",`
 border-color: #0000;
 z-index: 1;
 `),u("prefix","margin-right: 4px;"),u("suffix",`
 margin-left: 4px;
 `),u("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[f("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),f("base-clear",`
 font-size: var(--n-icon-size);
 `,[u("placeholder",[f("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),w(">",[f("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),f("base-icon",`
 font-size: var(--n-icon-size);
 `)]),f("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>B(`${e}-status`,[ue("disabled",[f("base-loading",`
 color: var(--n-loading-color-${e})
 `),u("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),u("state-border",`
 border: var(--n-border-${e});
 `),w("&:hover",[u("state-border",`
 border: var(--n-border-hover-${e});
 `)]),w("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),B("focus",`
 background-color: var(--n-color-focus-${e});
 `,[u("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),dn=f("input",[B("disabled",[u("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function cn(e){let a=0;for(const l of e)a++;return a}function ke(e){return e===""||e==null}function un(e){const a=A(null);function l(){const{value:p}=e;if(!p?.focus){i();return}const{selectionStart:d,selectionEnd:n,value:g}=p;if(d==null||n==null){i();return}a.value={start:d,end:n,beforeText:g.slice(0,d),afterText:g.slice(n)}}function c(){var p;const{value:d}=a,{value:n}=e;if(!d||!n)return;const{value:g}=n,{start:v,beforeText:x,afterText:C}=d;let M=g.length;if(g.endsWith(C))M=g.length-C.length;else if(g.startsWith(x))M=x.length;else{const _=x[v-1],b=g.indexOf(_,v-1);b!==-1&&(M=b+1)}(p=n.setSelectionRange)===null||p===void 0||p.call(n,M,M)}function i(){a.value=null}return je(e,i),{recordCursor:l,restoreCursor:c}}const dt=O({name:"InputWordCount",setup(e,{slots:a}){const{mergedValueRef:l,maxlengthRef:c,mergedClsPrefixRef:i,countGraphemesRef:p}=Te(xt),d=V(()=>{const{value:n}=l;return n===null||Array.isArray(n)?0:(p.value||cn)(n)});return()=>{const{value:n}=c,{value:g}=l;return s("span",{class:`${i.value}-input-word-count`},Vo(a.default,{value:g===null||Array.isArray(g)?"":g},()=>[n===void 0?d.value:`${d.value} / ${n}`]))}}}),hn=Object.assign(Object.assign({},Me.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),fn=O({name:"Input",props:hn,slots:Object,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:l,inlineThemeDisabled:c,mergedRtlRef:i}=Ge(e),p=Me("Input","-input",sn,ln,e,a);No&&Se("-input-safari",dn,a);const d=A(null),n=A(null),g=A(null),v=A(null),x=A(null),C=A(null),M=A(null),_=un(M),b=A(null),{localeRef:k}=Yr("Input"),z=A(e.defaultValue),W=me(e,"value"),E=ft(W,z),N=bt(e),{mergedSizeRef:K,mergedDisabledRef:L,mergedStatusRef:y}=N,D=A(!1),F=A(!1),R=A(!1),I=A(!1);let j=null;const H=V(()=>{const{placeholder:t,pair:r}=e;return r?Array.isArray(t)?t:t===void 0?["",""]:[t,t]:t===void 0?[k.value.placeholder]:[t]}),ie=V(()=>{const{value:t}=R,{value:r}=E,{value:h}=H;return!t&&(ke(r)||Array.isArray(r)&&ke(r[0]))&&h[0]}),le=V(()=>{const{value:t}=R,{value:r}=E,{value:h}=H;return!t&&h[1]&&(ke(r)||Array.isArray(r)&&ke(r[1]))}),G=Ke(()=>e.internalForceFocus||D.value),se=Ke(()=>{if(L.value||e.readonly||!e.clearable||!G.value&&!F.value)return!1;const{value:t}=E,{value:r}=G;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(F.value||r):!!t&&(F.value||r)}),q=V(()=>{const{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return"click"}),Y=A(!1),ze=V(()=>{const{textDecoration:t}=e;return t?Array.isArray(t)?t.map(r=>({textDecoration:r})):[{textDecoration:t}]:["",""]}),ge=A(void 0),Fe=()=>{var t,r;if(e.type==="textarea"){const{autosize:h}=e;if(h&&(ge.value=(r=(t=b.value)===null||t===void 0?void 0:t.$el)===null||r===void 0?void 0:r.offsetWidth),!n.value||typeof h=="boolean")return;const{paddingTop:S,paddingBottom:T,lineHeight:P}=window.getComputedStyle(n.value),X=Number(S.slice(0,-2)),J=Number(T.slice(0,-2)),Z=Number(P.slice(0,-2)),{value:de}=g;if(!de)return;if(h.minRows){const ce=Math.max(h.minRows,1),Oe=`${X+J+Z*ce}px`;de.style.minHeight=Oe}if(h.maxRows){const ce=`${X+J+Z*h.maxRows}px`;de.style.maxHeight=ce}}},De=V(()=>{const{maxlength:t}=e;return t===void 0?void 0:Number(t)});ir(()=>{const{value:t}=E;Array.isArray(t)||Ve(t)});const $e=lr().proxy;function te(t,r){const{onUpdateValue:h,"onUpdate:value":S,onInput:T}=e,{nTriggerFormInput:P}=N;h&&$(h,t,r),S&&$(S,t,r),T&&$(T,t,r),z.value=t,P()}function oe(t,r){const{onChange:h}=e,{nTriggerFormChange:S}=N;h&&$(h,t,r),z.value=t,S()}function Ae(t){const{onBlur:r}=e,{nTriggerFormBlur:h}=N;r&&$(r,t),h()}function Re(t){const{onFocus:r}=e,{nTriggerFormFocus:h}=N;r&&$(r,t),h()}function Be(t){const{onClear:r}=e;r&&$(r,t)}function We(t){const{onInputBlur:r}=e;r&&$(r,t)}function Ee(t){const{onInputFocus:r}=e;r&&$(r,t)}function Le(){const{onDeactivate:t}=e;t&&$(t)}function wt(){const{onActivate:t}=e;t&&$(t)}function yt(t){const{onClick:r}=e;r&&$(r,t)}function Ct(t){const{onWrapperFocus:r}=e;r&&$(r,t)}function kt(t){const{onWrapperBlur:r}=e;r&&$(r,t)}function _t(){R.value=!0}function Pt(t){R.value=!1,t.target===C.value?xe(t,1):xe(t,0)}function xe(t,r=0,h="input"){const S=t.target.value;if(Ve(S),t instanceof InputEvent&&!t.isComposing&&(R.value=!1),e.type==="textarea"){const{value:P}=b;P&&P.syncUnifiedContainer()}if(j=S,R.value)return;_.recordCursor();const T=St(S);if(T)if(!e.pair)h==="input"?te(S,{source:r}):oe(S,{source:r});else{let{value:P}=E;Array.isArray(P)?P=[P[0],P[1]]:P=["",""],P[r]=S,h==="input"?te(P,{source:r}):oe(P,{source:r})}$e.$forceUpdate(),T||lt(_.restoreCursor)}function St(t){const{countGraphemes:r,maxlength:h,minlength:S}=e;if(r){let P;if(h!==void 0&&(P===void 0&&(P=r(t)),P>Number(h))||S!==void 0&&(P===void 0&&(P=r(t)),P<Number(h)))return!1}const{allowInput:T}=e;return typeof T=="function"?T(t):!0}function Mt(t){We(t),t.relatedTarget===d.value&&Le(),t.relatedTarget!==null&&(t.relatedTarget===x.value||t.relatedTarget===C.value||t.relatedTarget===n.value)||(I.value=!1),we(t,"blur"),M.value=null}function Tt(t,r){Ee(t),D.value=!0,I.value=!0,wt(),we(t,"focus"),r===0?M.value=x.value:r===1?M.value=C.value:r===2&&(M.value=n.value)}function zt(t){e.passivelyActivated&&(kt(t),we(t,"blur"))}function Ft(t){e.passivelyActivated&&(D.value=!0,Ct(t),we(t,"focus"))}function we(t,r){t.relatedTarget!==null&&(t.relatedTarget===x.value||t.relatedTarget===C.value||t.relatedTarget===n.value||t.relatedTarget===d.value)||(r==="focus"?(Re(t),D.value=!0):r==="blur"&&(Ae(t),D.value=!1))}function Dt(t,r){xe(t,r,"change")}function $t(t){yt(t)}function At(t){Be(t),qe()}function qe(){e.pair?(te(["",""],{source:"clear"}),oe(["",""],{source:"clear"})):(te("",{source:"clear"}),oe("",{source:"clear"}))}function Rt(t){const{onMousedown:r}=e;r&&r(t);const{tagName:h}=t.target;if(h!=="INPUT"&&h!=="TEXTAREA"){if(e.resizable){const{value:S}=d;if(S){const{left:T,top:P,width:X,height:J}=S.getBoundingClientRect(),Z=14;if(T+X-Z<t.clientX&&t.clientX<T+X&&P+J-Z<t.clientY&&t.clientY<P+J)return}}t.preventDefault(),D.value||Ye()}}function Bt(){var t;F.value=!0,e.type==="textarea"&&((t=b.value)===null||t===void 0||t.handleMouseEnterWrapper())}function Wt(){var t;F.value=!1,e.type==="textarea"&&((t=b.value)===null||t===void 0||t.handleMouseLeaveWrapper())}function Et(){L.value||q.value==="click"&&(Y.value=!Y.value)}function Lt(t){if(L.value)return;t.preventDefault();const r=S=>{S.preventDefault(),Ze("mouseup",document,r)};if(Ne("mouseup",document,r),q.value!=="mousedown")return;Y.value=!0;const h=()=>{Y.value=!1,Ze("mouseup",document,h)};Ne("mouseup",document,h)}function It(t){e.onKeyup&&$(e.onKeyup,t)}function Vt(t){switch(e.onKeydown&&$(e.onKeydown,t),t.key){case"Escape":Ie();break;case"Enter":Ot(t);break}}function Ot(t){var r,h;if(e.passivelyActivated){const{value:S}=I;if(S){e.internalDeactivateOnEnter&&Ie();return}t.preventDefault(),e.type==="textarea"?(r=n.value)===null||r===void 0||r.focus():(h=x.value)===null||h===void 0||h.focus()}}function Ie(){e.passivelyActivated&&(I.value=!1,lt(()=>{var t;(t=d.value)===null||t===void 0||t.focus()}))}function Ye(){var t,r,h;L.value||(e.passivelyActivated?(t=d.value)===null||t===void 0||t.focus():((r=n.value)===null||r===void 0||r.focus(),(h=x.value)===null||h===void 0||h.focus()))}function Ht(){var t;!((t=d.value)===null||t===void 0)&&t.contains(document.activeElement)&&document.activeElement.blur()}function Nt(){var t,r;(t=n.value)===null||t===void 0||t.select(),(r=x.value)===null||r===void 0||r.select()}function jt(){L.value||(n.value?n.value.focus():x.value&&x.value.focus())}function Kt(){const{value:t}=d;t?.contains(document.activeElement)&&t!==document.activeElement&&Ie()}function Ut(t){if(e.type==="textarea"){const{value:r}=n;r?.scrollTo(t)}else{const{value:r}=x;r?.scrollTo(t)}}function Ve(t){const{type:r,pair:h,autosize:S}=e;if(!h&&S)if(r==="textarea"){const{value:T}=g;T&&(T.textContent=`${t??""}\r
`)}else{const{value:T}=v;T&&(t?T.textContent=t:T.innerHTML="&nbsp;")}}function Gt(){Fe()}const Xe=A({top:"0"});function qt(t){var r;const{scrollTop:h}=t.target;Xe.value.top=`${-h}px`,(r=b.value)===null||r===void 0||r.syncUnifiedContainer()}let ye=null;it(()=>{const{autosize:t,type:r}=e;t&&r==="textarea"?ye=je(E,h=>{!Array.isArray(h)&&h!==j&&Ve(h)}):ye?.()});let Ce=null;it(()=>{e.type==="textarea"?Ce=je(E,t=>{var r;!Array.isArray(t)&&t!==j&&((r=b.value)===null||r===void 0||r.syncUnifiedContainer())}):Ce?.()}),sr(xt,{mergedValueRef:E,maxlengthRef:De,mergedClsPrefixRef:a,countGraphemesRef:me(e,"countGraphemes")});const Yt={wrapperElRef:d,inputElRef:x,textareaElRef:n,isCompositing:R,clear:qe,focus:Ye,blur:Ht,select:Nt,deactivate:Kt,activate:jt,scrollTo:Ut},Xt=pt("Input",i,a),Je=V(()=>{const{value:t}=K,{common:{cubicBezierEaseInOut:r},self:{color:h,borderRadius:S,textColor:T,caretColor:P,caretColorError:X,caretColorWarning:J,textDecorationColor:Z,border:de,borderDisabled:ce,borderHover:Oe,borderFocus:Jt,placeholderColor:Zt,placeholderColorDisabled:Qt,lineHeightTextarea:eo,colorDisabled:to,colorFocus:oo,textColorDisabled:ro,boxShadowFocus:no,iconSize:ao,colorFocusWarning:io,boxShadowFocusWarning:lo,borderWarning:so,borderFocusWarning:co,borderHoverWarning:uo,colorFocusError:ho,boxShadowFocusError:fo,borderError:bo,borderFocusError:po,borderHoverError:vo,clearSize:mo,clearColor:go,clearColorHover:xo,clearColorPressed:wo,iconColor:yo,iconColorDisabled:Co,suffixTextColor:ko,countTextColor:_o,countTextColorDisabled:Po,iconColorHover:So,iconColorPressed:Mo,loadingColor:To,loadingColorError:zo,loadingColorWarning:Fo,fontWeight:Do,[ve("padding",t)]:$o,[ve("fontSize",t)]:Ao,[ve("height",t)]:Ro}}=p.value,{left:Bo,right:Wo}=jo($o);return{"--n-bezier":r,"--n-count-text-color":_o,"--n-count-text-color-disabled":Po,"--n-color":h,"--n-font-size":Ao,"--n-font-weight":Do,"--n-border-radius":S,"--n-height":Ro,"--n-padding-left":Bo,"--n-padding-right":Wo,"--n-text-color":T,"--n-caret-color":P,"--n-text-decoration-color":Z,"--n-border":de,"--n-border-disabled":ce,"--n-border-hover":Oe,"--n-border-focus":Jt,"--n-placeholder-color":Zt,"--n-placeholder-color-disabled":Qt,"--n-icon-size":ao,"--n-line-height-textarea":eo,"--n-color-disabled":to,"--n-color-focus":oo,"--n-text-color-disabled":ro,"--n-box-shadow-focus":no,"--n-loading-color":To,"--n-caret-color-warning":J,"--n-color-focus-warning":io,"--n-box-shadow-focus-warning":lo,"--n-border-warning":so,"--n-border-focus-warning":co,"--n-border-hover-warning":uo,"--n-loading-color-warning":Fo,"--n-caret-color-error":X,"--n-color-focus-error":ho,"--n-box-shadow-focus-error":fo,"--n-border-error":bo,"--n-border-focus-error":po,"--n-border-hover-error":vo,"--n-loading-color-error":zo,"--n-clear-color":go,"--n-clear-size":mo,"--n-clear-color-hover":xo,"--n-clear-color-pressed":wo,"--n-icon-color":yo,"--n-icon-color-hover":So,"--n-icon-color-pressed":Mo,"--n-icon-color-disabled":Co,"--n-suffix-text-color":ko}}),re=c?vt("input",V(()=>{const{value:t}=K;return t[0]}),Je,e):void 0;return Object.assign(Object.assign({},Yt),{wrapperElRef:d,inputElRef:x,inputMirrorElRef:v,inputEl2Ref:C,textareaElRef:n,textareaMirrorElRef:g,textareaScrollbarInstRef:b,rtlEnabled:Xt,uncontrolledValue:z,mergedValue:E,passwordVisible:Y,mergedPlaceholder:H,showPlaceholder1:ie,showPlaceholder2:le,mergedFocus:G,isComposing:R,activated:I,showClearButton:se,mergedSize:K,mergedDisabled:L,textDecorationStyle:ze,mergedClsPrefix:a,mergedBordered:l,mergedShowPasswordOn:q,placeholderStyle:Xe,mergedStatus:y,textAreaScrollContainerWidth:ge,handleTextAreaScroll:qt,handleCompositionStart:_t,handleCompositionEnd:Pt,handleInput:xe,handleInputBlur:Mt,handleInputFocus:Tt,handleWrapperBlur:zt,handleWrapperFocus:Ft,handleMouseEnter:Bt,handleMouseLeave:Wt,handleMouseDown:Rt,handleChange:Dt,handleClick:$t,handleClear:At,handlePasswordToggleClick:Et,handlePasswordToggleMousedown:Lt,handleWrapperKeydown:Vt,handleWrapperKeyup:It,handleTextAreaMirrorResize:Gt,getTextareaScrollContainer:()=>n.value,mergedTheme:p,cssVars:c?void 0:Je,themeClass:re?.themeClass,onRender:re?.onRender})},render(){var e,a,l,c,i,p,d;const{mergedClsPrefix:n,mergedStatus:g,themeClass:v,type:x,countGraphemes:C,onRender:M}=this,_=this.$slots;return M?.(),s("div",{ref:"wrapperElRef",class:[`${n}-input`,v,g&&`${n}-input--${g}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:x==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&x!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},s("div",{class:`${n}-input-wrapper`},be(_.prefix,b=>b&&s("div",{class:`${n}-input__prefix`},b)),x==="textarea"?s(Oo,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,theme:(a=(e=this.theme)===null||e===void 0?void 0:e.peers)===null||a===void 0?void 0:a.Scrollbar,themeOverrides:(c=(l=this.themeOverrides)===null||l===void 0?void 0:l.peers)===null||c===void 0?void 0:c.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var b,k;const{textAreaScrollContainerWidth:z}=this,W={width:this.autosize&&z&&`${z}px`};return s(ar,null,s("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(b=this.inputProps)===null||b===void 0?void 0:b.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(k=this.inputProps)===null||k===void 0?void 0:k.style,W],onBlur:this.handleInputBlur,onFocus:E=>{this.handleInputFocus(E,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?s("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,W],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?s(Ho,{onResize:this.handleTextAreaMirrorResize},{default:()=>s("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):s("div",{class:`${n}-input__input`},s("input",Object.assign({type:x==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":x},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(i=this.inputProps)===null||i===void 0?void 0:i.class],style:[this.textDecorationStyle[0],(p=this.inputProps)===null||p===void 0?void 0:p.style],tabindex:this.passivelyActivated&&!this.activated?-1:(d=this.inputProps)===null||d===void 0?void 0:d.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:b=>{this.handleInputFocus(b,0)},onInput:b=>{this.handleInput(b,0)},onChange:b=>{this.handleChange(b,0)}})),this.showPlaceholder1?s("div",{class:`${n}-input__placeholder`},s("span",null,this.mergedPlaceholder[0])):null,this.autosize?s("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&be(_.suffix,b=>b||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?s("div",{class:`${n}-input__suffix`},[be(_["clear-icon-placeholder"],k=>(this.clearable||k)&&s(Ue,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>k,icon:()=>{var z,W;return(W=(z=this.$slots)["clear-icon"])===null||W===void 0?void 0:W.call(z)}})),this.internalLoadingBeforeSuffix?null:b,this.loading!==void 0?s(rn,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?b:null,this.showCount&&this.type!=="textarea"?s(dt,null,{default:k=>{var z;const{renderCount:W}=this;return W?W(k):(z=_.count)===null||z===void 0?void 0:z.call(_,k)}}):null,this.mergedShowPasswordOn&&this.type==="password"?s("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?pe(_["password-visible-icon"],()=>[s(Pe,{clsPrefix:n},{default:()=>s(en,null)})]):pe(_["password-invisible-icon"],()=>[s(Pe,{clsPrefix:n},{default:()=>s(tn,null)})])):null]):null)),this.pair?s("span",{class:`${n}-input__separator`},pe(_.separator,()=>[this.separator])):null,this.pair?s("div",{class:`${n}-input-wrapper`},s("div",{class:`${n}-input__input`},s("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:C?void 0:this.maxlength,minlength:C?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:b=>{this.handleInputFocus(b,1)},onInput:b=>{this.handleInput(b,1)},onChange:b=>{this.handleChange(b,1)}}),this.showPlaceholder2?s("div",{class:`${n}-input__placeholder`},s("span",null,this.mergedPlaceholder[1])):null),be(_.suffix,b=>(this.clearable||b)&&s("div",{class:`${n}-input__suffix`},[this.clearable&&s(Ue,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var k;return(k=_["clear-icon"])===null||k===void 0?void 0:k.call(_)},placeholder:()=>{var k;return(k=_["clear-icon-placeholder"])===null||k===void 0?void 0:k.call(_)}}),b]))):null,this.mergedBordered?s("div",{class:`${n}-input__border`}):null,this.mergedBordered?s("div",{class:`${n}-input__state-border`}):null,this.showCount&&x==="textarea"?s(dt,null,{default:b=>{var k;const{renderCount:z}=this;return z?z(b):(k=_.count)===null||k===void 0?void 0:k.call(_,b)}}):null)}}),bn=f("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[w(">",[f("input",[w("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),w("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),f("button",[w("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[u("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),w("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[u("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),w("*",[w("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[w(">",[f("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),f("base-selection",[f("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),f("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),u("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),w("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[w(">",[f("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),f("base-selection",[f("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),f("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),u("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),pn={},vn=O({name:"InputGroup",props:pn,setup(e){const{mergedClsPrefixRef:a}=Ge(e);return Se("-input-group",bn,a),{mergedClsPrefix:a}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}}),mn={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"};function gn(e){const{baseColor:a,inputColorDisabled:l,cardColor:c,modalColor:i,popoverColor:p,textColorDisabled:d,borderColor:n,primaryColor:g,textColor2:v,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:M,borderRadiusSmall:_,lineHeight:b}=e;return Object.assign(Object.assign({},mn),{labelLineHeight:b,fontSizeSmall:x,fontSizeMedium:C,fontSizeLarge:M,borderRadius:_,color:a,colorChecked:g,colorDisabled:l,colorDisabledChecked:l,colorTableHeader:c,colorTableHeaderModal:i,colorTableHeaderPopover:p,checkMarkColor:a,checkMarkColorDisabled:d,checkMarkColorDisabledChecked:d,border:`1px solid ${n}`,borderDisabled:`1px solid ${n}`,borderDisabledChecked:`1px solid ${n}`,borderChecked:`1px solid ${g}`,borderFocus:`1px solid ${g}`,boxShadowFocus:`0 0 0 2px ${_e(g,{alpha:.3})}`,textColor:v,textColorDisabled:d})}const xn={common:ht,self:gn},wn=gt("n-checkbox-group"),yn=()=>s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Cn=()=>s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),kn=w([f("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[B("show-label","line-height: var(--n-label-line-height);"),w("&:hover",[f("checkbox-box",[u("border","border: var(--n-border-checked);")])]),w("&:focus:not(:active)",[f("checkbox-box",[u("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),B("inside-table",[f("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),B("checked",[f("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[f("checkbox-icon",[w(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("indeterminate",[f("checkbox-box",[f("checkbox-icon",[w(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),w(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("checked, indeterminate",[w("&:focus:not(:active)",[f("checkbox-box",[u("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),f("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[u("border",{border:"var(--n-border-checked)"})])]),B("disabled",{cursor:"not-allowed"},[B("checked",[f("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[u("border",{border:"var(--n-border-disabled-checked)"}),f("checkbox-icon",[w(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),f("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[u("border",`
 border: var(--n-border-disabled);
 `),f("checkbox-icon",[w(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),u("label",`
 color: var(--n-text-color-disabled);
 `)]),f("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),f("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[u("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),f("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[w(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),ct({left:"1px",top:"1px"})])]),u("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[w("&:empty",{display:"none"})])]),Ko(f("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Uo(f("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),_n=Object.assign(Object.assign({},Me.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Pn=O({name:"Checkbox",props:_n,setup(e){const a=Te(wn,null),l=A(null),{mergedClsPrefixRef:c,inlineThemeDisabled:i,mergedRtlRef:p}=Ge(e),d=A(e.defaultChecked),n=me(e,"checked"),g=ft(n,d),v=Ke(()=>{if(a){const y=a.valueSetRef.value;return y&&e.value!==void 0?y.has(e.value):!1}else return g.value===e.checkedValue}),x=bt(e,{mergedSize(y){const{size:D}=e;if(D!==void 0)return D;if(a){const{value:F}=a.mergedSizeRef;if(F!==void 0)return F}if(y){const{mergedSize:F}=y;if(F!==void 0)return F.value}return"medium"},mergedDisabled(y){const{disabled:D}=e;if(D!==void 0)return D;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:F},checkedCountRef:R}=a;if(F!==void 0&&R.value>=F&&!v.value)return!0;const{minRef:{value:I}}=a;if(I!==void 0&&R.value<=I&&v.value)return!0}return y?y.disabled.value:!1}}),{mergedDisabledRef:C,mergedSizeRef:M}=x,_=Me("Checkbox","-checkbox",kn,xn,e,c);function b(y){if(a&&e.value!==void 0)a.toggleCheckbox(!v.value,e.value);else{const{onChange:D,"onUpdate:checked":F,onUpdateChecked:R}=e,{nTriggerFormInput:I,nTriggerFormChange:j}=x,H=v.value?e.uncheckedValue:e.checkedValue;F&&$(F,H,y),R&&$(R,H,y),D&&$(D,H,y),I(),j(),d.value=H}}function k(y){C.value||b(y)}function z(y){if(!C.value)switch(y.key){case" ":case"Enter":b(y)}}function W(y){switch(y.key){case" ":y.preventDefault()}}const E={focus:()=>{var y;(y=l.value)===null||y===void 0||y.focus()},blur:()=>{var y;(y=l.value)===null||y===void 0||y.blur()}},N=pt("Checkbox",p,c),K=V(()=>{const{value:y}=M,{common:{cubicBezierEaseInOut:D},self:{borderRadius:F,color:R,colorChecked:I,colorDisabled:j,colorTableHeader:H,colorTableHeaderModal:ie,colorTableHeaderPopover:le,checkMarkColor:G,checkMarkColorDisabled:se,border:q,borderFocus:Y,borderDisabled:ze,borderChecked:ge,boxShadowFocus:Fe,textColor:De,textColorDisabled:$e,checkMarkColorDisabledChecked:te,colorDisabledChecked:oe,borderDisabledChecked:Ae,labelPadding:Re,labelLineHeight:Be,labelFontWeight:We,[ve("fontSize",y)]:Ee,[ve("size",y)]:Le}}=_.value;return{"--n-label-line-height":Be,"--n-label-font-weight":We,"--n-size":Le,"--n-bezier":D,"--n-border-radius":F,"--n-border":q,"--n-border-checked":ge,"--n-border-focus":Y,"--n-border-disabled":ze,"--n-border-disabled-checked":Ae,"--n-box-shadow-focus":Fe,"--n-color":R,"--n-color-checked":I,"--n-color-table":H,"--n-color-table-modal":ie,"--n-color-table-popover":le,"--n-color-disabled":j,"--n-color-disabled-checked":oe,"--n-text-color":De,"--n-text-color-disabled":$e,"--n-check-mark-color":G,"--n-check-mark-color-disabled":se,"--n-check-mark-color-disabled-checked":te,"--n-font-size":Ee,"--n-label-padding":Re}}),L=i?vt("checkbox",V(()=>M.value[0]),K,e):void 0;return Object.assign(x,E,{rtlEnabled:N,selfRef:l,mergedClsPrefix:c,mergedDisabled:C,renderedChecked:v,mergedTheme:_,labelId:Go(),handleClick:k,handleKeyUp:z,handleKeyDown:W,cssVars:i?void 0:K,themeClass:L?.themeClass,onRender:L?.onRender})},render(){var e;const{$slots:a,renderedChecked:l,mergedDisabled:c,indeterminate:i,privateInsideTable:p,cssVars:d,labelId:n,label:g,mergedClsPrefix:v,focusable:x,handleKeyUp:C,handleKeyDown:M,handleClick:_}=this;(e=this.onRender)===null||e===void 0||e.call(this);const b=be(a.default,k=>g||k?s("span",{class:`${v}-checkbox__label`,id:n},g||k):null);return s("div",{ref:"selfRef",class:[`${v}-checkbox`,this.themeClass,this.rtlEnabled&&`${v}-checkbox--rtl`,l&&`${v}-checkbox--checked`,c&&`${v}-checkbox--disabled`,i&&`${v}-checkbox--indeterminate`,p&&`${v}-checkbox--inside-table`,b&&`${v}-checkbox--show-label`],tabindex:c||!x?void 0:0,role:"checkbox","aria-checked":i?"mixed":l,"aria-labelledby":n,style:d,onKeyup:C,onKeydown:M,onClick:_,onMousedown:()=>{Ne("selectstart",window,k=>{k.preventDefault()},{once:!0})}},s("div",{class:`${v}-checkbox-box-wrapper`}," ",s("div",{class:`${v}-checkbox-box`},s(ut,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${v}-checkbox-icon`},Cn()):s("div",{key:"check",class:`${v}-checkbox-icon`},yn())}),s("div",{class:`${v}-checkbox-box__border`}))),b)}}),Sn="/CPT_web/assets/Aofa-CM89lPo4.png",Mn="/CPT_web/assets/fsca-rFe9mG0l.png",Tn="/CPT_web/assets/ifsc-DTnXFofV.png",zn="/CPT_web/assets/fca-BlrvGtjr.png",Fn="/CPT_web/assets/team1-avatar-F0IxAnjH.png",Dn="/CPT_web/assets/team2-avatar-BWPnKYSe.png",$n="/CPT_web/assets/team3-avatar-BDczrgkU.png",An="/CPT_web/assets/team4-avatar-D4XzQZxS.png",Rn="/CPT_web/assets/team5-avatar-i4ybUDOD.png",Bn="/CPT_web/assets/team6-avatar-pz_jytGk.png",Wn="/CPT_web/assets/team7-avatar-B2JzpK72.png",En="/CPT_web/assets/team8-avatar-CrCRKMdC.png",Ln={class:"award","pt-60":"","pb-80":""},In={key:0,class:"title","text-center":"",text:"48","font-700":""},Vn={key:1,class:"title","text-center":"",text:"24","font-700":""},On={key:2,flex:"","justify-center":"","gap-20":"","mt-40":"","text-center":""},Hn={key:3,"mt-20":""},Nn={class:"subscription","text-white":"","h-470":"","pt-60":""},jn={class:"input-wrapper",flex:"","justify-center":"","mt-40":""},Kn={key:0},Un={class:"checkbox-wrapper","mt-20":"","text-center":""},Gn={class:"register","h-870":"","pt-60":""},qn={class:"content",flex:"","justify-center":"","items-center":"","mt-60":"","gap-64":""},Yn={class:"register-left"},Xn=O({__name:"index",setup(e){const{isMobile:a}=dr(cr()),l={textColor:"white"};return(c,i)=>{const p=qo,d=or,n=fn,g=Yo,v=vn,x=Pn,C=er;return Q(),ne("div",null,[U(p),i[15]||(i[15]=o("div",{class:"banner","h-600":"",text:"center #fff"},[o("div",{class:"title",text:"96","font-700":"","pt-100":""},"创造财富 由此开始"),o("div",{text:"36",flex:"","justify-center":"","gap-20":""},[o("div",{class:"line-left"}),o("div",{class:"sub"},"认识我们"),o("div",{class:"line-right"})])],-1)),i[16]||(i[16]=o("div",{class:"story","h-520":"","pl-240":"","pt-80":""},[o("div",{"text-48":"","font-700":""},"我们的故事"),o("div",{class:"story-content","mt-30":"","text-16":"","w-620":""},[m(" CPT Markets 是一家享有盛誉的国际公司，致力于为全球投资者提供多元化、高流动性的交易选择。我们提供超过130种交易产品，涵盖外汇、大宗商品及指数等多个领域，满足不同交易者的策略与需求。 "),o("br"),m(" 资金安全始终是我们的核心承诺，我们通过严格的监管合规措施、先进的加密技术及隔离账户管理，全力保障客户资金的安全与透明。同时，我们以高效稳定的交易系统、低延迟的执行能力和用户友好的平台体验，为客户提供安全、便捷、专业的交易环境。 凭借卓越的服务品质与可靠的交易平台，CPT Markets已成为全球众多交易者信赖的首选品牌。 ")])],-1)),o("div",Ln,[ee(a)?(Q(),ne("div",Vn," 体验获奖的交易平台 ")):(Q(),ne("div",In," 荣誉和奖项 ")),i[2]||(i[2]=o("div",{class:"description","mt-20":"","text-center":""}," 我们所获得的每一项荣誉，即是行业与市场对我们专业能力和服务品质的权威认可，更是使我们不断超越自我的责任与使命 ",-1)),ee(a)?(Q(),ne("div",Hn,[U(d,{"x-scrollable":""},{default:ae(()=>[...i[1]||(i[1]=[o("div",{flex:"","gap-10":"","text-center":""},[o("div",null,[o("img",{src:Qe,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])]),o("div",null,[o("img",{src:et,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])]),o("div",null,[o("img",{src:tt,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])]),o("div",null,[o("img",{src:ot,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])]),o("div",null,[o("img",{src:rt,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])]),o("div",null,[o("img",{src:nt,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])]),o("div",null,[o("img",{src:at,"w-140":"","h-140":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])])],-1)])]),_:1})])):(Q(),ne("div",On,[...i[0]||(i[0]=[o("div",null,[o("img",{src:Qe,"w-240":"","h-240":"",alt:""}),o("div",null,"迪拜MFFM奖项")],-1),o("div",null,[o("img",{src:et,"w-240":"","h-240":"",alt:""}),o("div",null,"国际金融奖项")],-1),o("div",null,[o("img",{src:tt,"w-240":"","h-240":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])],-1),o("div",null,[o("img",{src:ot,"w-240":"","h-240":"",alt:""}),o("div",null,[m(" 最具信誉 "),o("br"),m(" 外汇经纪商 ")])],-1),o("div",null,[o("img",{src:rt,"w-240":"","h-240":"",alt:""}),o("div",null,[m(" 阿联酋国际金融 "),o("br"),m(" 衍生品提供商 ")])],-1),o("div",null,[o("img",{src:nt,"w-240":"","h-240":"",alt:""}),o("div",null,"最佳监管经纪商")],-1),o("div",null,[o("img",{src:at,"w-240":"","h-240":"",alt:""}),o("div",null,[m(" 南非交易商博览会 "),o("br"),m(" 金赞助商 ")])],-1)])]))]),i[17]||(i[17]=o("div",{class:"organization","pt-60":"","pb-80":""},[o("div",{class:"title",text:"white 48 center","font-700":""},"全球金融机构信赖"),o("div",{class:"sub",text:"white 16 center"}," 我们深知金融服务的基石是信任，而信任源于安全合规与严格监管 "),o("div",{class:"list",flex:"","flex-wrap":"","justify-center":"","gap-90":"","mt-30":""},[o("div",{class:"item",relative:"","pt-20":"","pr-20":"","pb-30":"","pl-70":"",bg:"white","rounded-16":""},[o("div",{class:"title",text:"#1677FF 20","font-900":""},[m(" Aofa- "),o("br"),m(" CPT Global Limited ")]),o("div",{class:"content","w-560":"",text:"16 #2C2C2C","mt-10":"","break-all":""}," CPT Global Limited（“CPT Global”）是一家由安儒昂离岸金融管理局授权的公司，许可证号为 L15643/CPTG。该许可证允许 CPT Global 从事外汇 (Forex)、股票、差价合约 (CFD)、外汇商品和受监管证券的经纪服务。 "),o("div",{class:"content",text:"16 #2C2C2C","mt-10":""}," CPT Global 注册于科摩罗联盟安儒昂自治岛穆察穆 "),o("img",{absolute:"","w-100":"","h-100":"","top-20":"","left--50":"",src:Sn,alt:"",srcset:""})]),o("div",{class:"item",relative:"","pt-20":"","pr-20":"","pb-30":"","pl-70":"",bg:"white","rounded-16":""},[o("div",{class:"title",text:"#1677FF 20","font-900":""},[m(" FSCA - "),o("br"),m(" CPT Markets PTY Ltd ")]),o("div",{class:"content","w-560":"",text:"16 #2C2C2C","mt-10":"","break-all":""},[m(" CPT Markets PTY LTD (“CPT SA”)为CPT Markets Ltd所使用的交易名称，注册地为南非，受南非金融部监管局监管， "),o("br"),m(" 许可证编号为：No. 2014 / 214730 / 07 。 ")]),o("img",{absolute:"","w-100":"","h-100":"","top-20":"","left--50":"",src:Mn,alt:"",srcset:""})]),o("div",{class:"item",relative:"","pt-20":"","pr-20":"","pb-30":"","pl-70":"",bg:"white","rounded-16":""},[o("div",{class:"title",text:"#1677FF 20","font-900":""},[m(" IFSC- "),o("br"),m(" CPT Belize ")]),o("div",{class:"content","w-560":"",text:"16 #2C2C2C","mt-10":"","break-all":""},[m(" CPT Markets为CPT Markets Limited所使用的交易名称，注册地为伯利茲，受伯利茲国际金融服务委员会监管， "),o("br"),m(" 许可证编号为：No. FSC000314/17。 ")]),o("img",{absolute:"","w-100":"","h-100":"","top-20":"","left--50":"",src:Tn,alt:"",srcset:""})]),o("div",{class:"item",relative:"","pt-20":"","pr-20":"","pb-30":"","pl-70":"",bg:"white","rounded-16":""},[o("div",{class:"title",text:"#1677FF 20","font-900":""},[m(" FCA - "),o("br"),m(" CPT Markets UK Ltd ")]),o("div",{class:"content","w-560":"",text:"16 #2C2C2C","mt-10":"","break-all":""}," CPT Markets UK为CPT Markets UK Limited所使用的交易名称，该公司的注册地址位于英格兰威尔士，注册编号为6707165，由英国金融行为管理局（FCA）授权和管理，编号为606110。CPT Markets UK Limited是CPT Markets Limited的关联公司。 "),o("img",{absolute:"","w-100":"","h-100":"","top-20":"","left--50":"",src:zn,alt:"",srcset:""})])])],-1)),i[18]||(i[18]=o("div",{class:"team","h-760":"",relative:"","pt-60":""},[o("div",{class:"title",text:"48 center","font-700":""}," 汇聚世界级人才的多元化团队 "),o("div",{class:"sub",text:"16 center","mt-20":""}," 我们有来自不同领域的顶尖专业背景人才，遍布全球的卓越团队，持续创新，深刻理解全球市场，并为客户创造真正具有前瞻性的交易平台 "),o("img",{class:"img1",absolute:"","w-128":"","h-128":"","left-435":"","top-252":"",src:Fn}),o("img",{class:"img2",absolute:"","w-128":"","h-128":"","left-940":"","top-226":"",src:Dn}),o("img",{class:"img3",absolute:"","w-128":"","h-128":"","left-1158":"","top-309":"",src:$n}),o("img",{class:"img4",absolute:"","w-128":"","h-128":"","left-1402":"","top-251":"",src:An}),o("img",{class:"img5",absolute:"","w-128":"","h-128":"","left-957":"","top-437":"",src:Rn}),o("img",{class:"img6",absolute:"","w-128":"","h-128":"","left-749":"","top-352":"",src:Bn}),o("img",{class:"img7",absolute:"","w-128":"","h-128":"","left-579":"","top-534":"",src:Wn}),o("img",{class:"img8",absolute:"","w-128":"","h-128":"","left-1274":"","top-502":"",src:En})],-1)),o("div",Nn,[i[6]||(i[6]=o("div",{class:"title",text:"48 center","font-700":""},"独家优惠 仅限订阅",-1)),i[7]||(i[7]=o("div",{class:"sub",text:"16 center","mt-20":""},[m(" 想第一时间获知市场最新动态及GPT Markets Group最新的活动奖励吗？ "),o("br"),m(" 主立即订阅我们的专属通讯，助你在投资路上快人一步 ")],-1)),o("div",jn,[U(v,{"w-680":""},{default:ae(()=>[U(n,{class:"input","text-18":"","h-80":"",placeholder:"电子邮件","rounded-16":""}),ee(a)?st("",!0):(Q(),hr(g,{key:0,"text-18":"",color:"#2240A2","h-80":"","rounded-16":""},{default:ae(()=>[...i[3]||(i[3]=[m(" 立即订阅 ",-1)])]),_:1}))]),_:1})]),ee(a)?(Q(),ne("div",Kn,[U(g,{"mt-16":"","h-44":"","w-full":"",color:"#2240A2","rounded-8":""},{default:ae(()=>[...i[4]||(i[4]=[m("立即订阅",-1)])]),_:1})])):st("",!0),o("div",Un,[U(x,{"theme-overrides":l},{default:ae(()=>[...i[5]||(i[5]=[m("我同意根据隐私政策和条款使用我的数据",-1)])]),_:1})])]),o("div",Gn,[i[14]||(i[14]=o("div",{class:"title",text:"center 48","font-700":""},"加入200万+投资者选择",-1)),o("div",qn,[o("div",Yn,[i[9]||(i[9]=o("div",{class:"head","mb-40":"","text-36":"","font-700":""},"只需3步，即可开户交易",-1)),i[10]||(i[10]=o("div",{class:"step",flex:""},[o("div",{relative:"","pt-10":"","pb-80":""},[o("div",{"w-16":"","h-16":"",bg:"#FFA300","rounded-full":""}),o("div",{absolute:"","left-7":"","top-34":"","h-70":"","border-l":"2px solid #FFA300"})]),o("div",{"ml-22":""},[o("div",{"text-24":"","font-700":""},"注册开户"),o("div",{text:"16 #2c2c2c"},"填写你的个人资讯并验证")])],-1)),i[11]||(i[11]=o("div",{class:"step",flex:""},[o("div",{relative:"","pt-10":"","pb-80":""},[o("div",{"w-16":"","h-16":"",bg:"#FFA300","rounded-full":""}),o("div",{absolute:"","left-7":"","top-34":"","h-70":"","border-l":"2px solid #1677FF"})]),o("div",{"ml-22":""},[o("div",{"text-24":"","font-700":""},"账户入金"),o("div",{text:"16 #2c2c2c"},"多种存款选项，即时为你的账户入金")])],-1)),i[12]||(i[12]=o("div",{class:"step",flex:""},[o("div",{relative:"","pt-6":""},[o("img",{"w-16":"","h-16":"",src:rr,alt:""})]),o("div",{"ml-22":""},[o("div",{"text-24":"","font-700":""},"领取奖励"),o("div",{text:"16 #2c2c2c"},"享受各账户级别点差优惠，开始交易")])],-1)),o("div",null,[U(g,{style:ur({marginTop:ee(a)?"5rem":"20rem",width:ee(a)?"100%":"75rem",height:ee(a)?"12.5rem":"15rem"}),"text-24":"",round:"",color:"#00A3E7"},{default:ae(()=>[...i[8]||(i[8]=[m("立即开户",-1)])]),_:1},8,["style"])])]),i[13]||(i[13]=o("div",{class:"register-right",relative:"","w-966":"","h-541":""},[o("img",{absolute:"","left-388":"","w-280":"","h-572":"",src:nr,alt:""})],-1))])]),i[19]||(i[19]=o("div",{class:"download","h-370":"","pt-60":""},[o("div",{class:"title",text:"48 center white","font-700":""}," 只需三分钟开户 迈向财富的第一步 "),o("div",{class:"wrapper",relative:"",flex:"","justify-center":"","gap-40":"","mt-40":""},[o("div",{class:"download-item","bg-white":"",flex:"","items-center":"","h-120":"","w-330":"","gap-20":"","px-20":"","rounded-12":""},[o("img",{"w-80":"",src:Xo,alt:""}),o("div",null,[o("div",{class:"main-content","font-500":"","text-30":""},"App Store"),o("div",{class:"sub-content","font-400":"",text:"16 #808080"},"下载>")])]),o("div",{class:"download-item","bg-white":"",flex:"","items-center":"","h-120":"","w-330":"","gap-20":"","px-20":"","rounded-12":""},[o("img",{"w-80":"",src:Jo,alt:""}),o("div",null,[o("div",{class:"main-content","font-500":"","text-30":""},"Google Play"),o("div",{class:"sub-content","font-400":"",text:"16 #808080"},"下载>")])]),o("div",{class:"download-item","bg-white":"",flex:"","items-center":"","h-120":"","w-330":"","gap-20":"","px-20":"","rounded-12":""},[o("img",{"w-80":"",src:Zo,alt:""}),o("div",null,[o("div",{class:"main-content","font-500":"","text-30":""},"真实账户"),o("div",{class:"sub-content","font-400":"",text:"16 #808080"},"开设>")])]),o("div",{class:"download-item","bg-white":"",flex:"","items-center":"","h-120":"","w-330":"","gap-20":"","px-20":"","rounded-12":""},[o("img",{"w-80":"",src:Qo,alt:""}),o("div",null,[o("div",{class:"main-content","font-500":"","text-30":""},"模拟账户"),o("div",{class:"sub-content","font-400":"",text:"16 #808080"},"开设>")])])])],-1)),U(C)])}}}),oa=fr(Xn,[["__scopeId","data-v-effe21c9"]]);export{oa as default};
