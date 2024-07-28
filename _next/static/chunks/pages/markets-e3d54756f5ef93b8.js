(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1162],{61553:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/markets",function(){return r(15393)}])},15393:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return markets}});var a=r(35944),l=r(67294),n=r(15861),o=r(44431),i=r.n(o),s=r(10534),c=r(77343),u=r(3718),d=r(82729),p=r(70917),y=r(2734);function _templateObject(){let t=(0,d._)(["\n      width: 100%;\n\n      "," {\n        padding: 0;\n      }\n    "]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,d._)(["\n      display: flex;\n      flex-wrap: wrap;\n    "]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,d._)(["\n      flex-direction: column;\n      overflow: hidden;\n    "]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,d._)(["\n      display: block;\n      margin-bottom: ",";\n\n      "," {\n        font-size: 0.75rem;\n      }\n    "]);return _templateObject3=function(){return t},t}function _templateObject4(){let t=(0,d._)(["\n      "," {\n        font-size: ",";\n        font-weight: ",";\n        letter-spacing: ",";\n      }\n    "]);return _templateObject4=function(){return t},t}function _templateObject5(){let t=(0,d._)(["\n      display: block;\n      "," {\n        display: none;\n      }\n    "]);return _templateObject5=function(){return t},t}function _templateObject6(){let t=(0,d._)(["\n      display: none;\n      margin-top: ",";\n\n      "," {\n        display: block;\n      }\n    "]);return _templateObject6=function(){return t},t}let useStyles=()=>{let t=(0,y.Z)();return{headerRoot:(0,p.iv)(_templateObject(),t.breakpoints.down("md")),row:(0,p.iv)(_templateObject1()),box:(0,p.iv)(_templateObject2()),title:(0,p.iv)(_templateObject3(),t.spacing(1),t.breakpoints.down("md")),value:(0,p.iv)(_templateObject4(),t.breakpoints.down("md"),t.typography.body2.fontSize,t.typography.body2.fontWeight,t.typography.body2.letterSpacing),table:(0,p.iv)(_templateObject5(),t.breakpoints.down("lg")),cards:(0,p.iv)(_templateObject6(),t.spacing(4),t.breakpoints.down("lg"))}};function styles_templateObject(){let t=(0,d._)(["\n      color: ",";\n    "]);return styles_templateObject=function(){return t},t}function styles_templateObject1(){let t=(0,d._)(["\n      > span {\n        white-space: nowrap;\n      }\n    "]);return styles_templateObject1=function(){return t},t}function styles_templateObject2(){let t=(0,d._)(["\n      .table__table-cards__card-content {\n        "," {\n          grid-template-columns: 1fr 1fr 1fr 1fr;\n          grid-template-rows: 1fr 1fr;\n          row-gap: ",";\n        }\n\n        "," {\n          grid-template-columns: 1fr 1fr 1fr;\n          grid-template-rows: 1fr 1fr;\n        }\n      }\n    "]);return styles_templateObject2=function(){return t},t}let styles_useStyles=()=>{let t=(0,y.Z)();return{whiteText:(0,p.iv)(styles_templateObject(),t.palette.text.primary),noWrap:(0,p.iv)(styles_templateObject1()),cardContentGrid:(0,p.iv)(styles_templateObject2(),t.breakpoints.down("xxl"),t.spacing(5),t.breakpoints.down("md"))}};var b=r(93734),m=r(45080),g=r(78404),h=r(54940);let MarketTableUi=t=>{let{markets:e,getRowHref:r,isLoading:o}=t,{t:d}=(0,c.$)(),p=useStyles(),y=styles_useStyles(),b=(0,l.useMemo)(()=>[{key:"asset",label:d("market.columns.asset"),orderable:!1,align:"left"},{key:"totalSupply",label:d("market.columns.totalSupply"),orderable:!0,align:"right"},{key:"supplyApy",label:d("market.columns.supplyApy"),orderable:!0,align:"right"},{key:"totalBorrows",label:d("market.columns.totalBorrow"),orderable:!0,align:"right"},{key:"borrowApy",label:d("market.columns.borrowApy"),orderable:!0,align:"right"},{key:"utilizationRate",label:"Utilization Rate",orderable:!0,align:"right"},{key:"collateralFactor",label:d("market.columns.collateralFactor"),orderable:!0,align:"right"},{key:"price",label:d("market.columns.price"),orderable:!0,align:"right"}],[]),h=(0,l.useMemo)(()=>{let t=[...b],[e]=t.splice(5,1);return t.splice(3,0,e),t},[b]),_=(0,l.useMemo)(()=>e.map(t=>[{key:"asset",render:()=>(0,a.tZ)(s.SN,{token:(0,g.tl)(t.id),css:y.whiteText}),value:t.id},{key:"totalSupply",render:()=>(0,a.tZ)(s.zW,{topValue:(0,m.RV)({value:100*t.totalSupplyUsd,shortenLargeValue:!0,showDust:!1}),bottomValue:(0,m.xH)({value:new(i())(parseFloat(t.totalSupply2)*t.exchangeRateHumanReadable),token:(0,g.tl)(t.id),minimizeDecimals:!0,shortenLargeValue:!0}),css:y.noWrap}),align:"right",value:t.totalSupplyUsd},{key:"supplyApy",render:()=>"ousg"!==t.id?(0,a.tZ)(n.Z,{variant:"body1",children:(0,m.yo)(t.supplyApy)}):(0,a.tZ)(n.Z,{variant:"body2",children:"N/A"}),value:t.supplyApy.toNumber(),align:"right"},{key:"totalBorrows",render:()=>"ousg"!==t.id?(0,a.tZ)(s.zW,{topValue:(0,m.RV)({value:100*t.totalBorrowsUsd,shortenLargeValue:!0,showDust:!1}),bottomValue:(0,m.xH)({value:new(i())(t.totalBorrows2),token:(0,g.tl)(t.id),minimizeDecimals:!0,shortenLargeValue:!0}),css:y.noWrap}):(0,a.tZ)(n.Z,{variant:"body2",children:"N/A"}),value:t.totalBorrows2,align:"right"},{key:"borrowApy",render:()=>"ousg"!==t.id?(0,a.tZ)(n.Z,{variant:"body1",children:(0,m.yo)(t.borrowApy)}):(0,a.tZ)(n.Z,{variant:"body2",children:"N/A"}),value:t.borrowApy.toNumber(),align:"right"},{key:"utilizationRate",render:()=>"ousg"!==t.id?(0,a.tZ)(n.Z,{variant:"body1",children:(0,m.yo)(t.totalBorrowsUsd/t.totalSupplyUsd*100)}):(0,a.tZ)(n.Z,{variant:"body2",children:"N/A"}),value:t.totalBorrowsUsd/t.totalSupplyUsd,align:"right"},{key:"collateralFactor",render:()=>u.RD.includes(t.id.toUpperCase())?(0,a.tZ)(n.Z,{variant:"body2",children:"N/A"}):(0,a.tZ)(n.Z,{variant:"body1",css:y.whiteText,children:(0,m.yo)(100*t.collateralFactor)}),value:t.collateralFactor,align:"right"},{key:"price",render:()=>(0,a.tZ)(n.Z,{variant:"body1",css:y.whiteText,children:(0,m.RV)({value:t.tokenPrice.multipliedBy(100)})}),align:"right",value:t.tokenPrice.toNumber()}]),[JSON.stringify(e)]);return(0,a.tZ)(s.iA,{columns:b,cardColumns:h,data:_,initialOrder:{orderBy:"supplyApy",orderDirection:"desc"},rowKeyIndex:0,getRowHref:r,tableCss:p.table,cardsCss:p.cards,css:y.cardContentGrid,isFetching:o})};var Market_MarketTable=()=>{let{data:{markets:t}={markets:[]},isLoading:e,refetch:r}=(0,h.Z)(),{chain:n}=(0,l.useContext)(b.V);return(0,l.useEffect)(()=>{r()},[null==n?void 0:n.id]),(0,a.tZ)(MarketTableUi,{isLoading:e,markets:t,getRowHref:t=>"/market/".concat(t[0].value)})},_=r(86886),k=r(82200),w=r(88078),markets=()=>{let{t}=(0,c.$)(),e=useStyles(),{data:r={markets:[]}}=(0,h.Z)({placeholderData:{markets:[]}}),{totalSupplyUsd:o,totalBorrowsUsd:i,totalBalanceUsd:s,totalLiquidityUsd:u}=(0,l.useMemo)(()=>{let t=r.markets.reduce((t,e)=>(t.totalBalanceUsd=t.totalBalanceUsd+e.totalSupplyUsd-e.totalBorrowsUsd,t.totalLiquidityUsd=t.totalBalanceUsd,t.totalSupplyUsd+=e.totalSupplyUsd,t.totalBorrowsUsd+=e.totalBorrowsUsd,t),{totalSupplyUsd:0,totalBorrowsUsd:0,totalBalanceUsd:0,totalLiquidityUsd:0});return t},[r]);return(0,a.BX)(a.HY,{children:[(0,a.tZ)("div",{css:e.headerRoot,children:(0,a.BX)(_.ZP,{container:!0,spacing:4,children:[(0,a.tZ)(_.ZP,{item:!0,xs:12,lg:6,children:(0,a.BX)(k.Z,{css:e.box,children:[(0,a.tZ)(n.Z,{variant:"body2",css:e.title,children:t("market.totalSupply")}),(0,a.BX)(n.Z,{variant:"h4",css:e.value,children:[o>0&&(0,m.RV)({shortenLargeValue:!0,value:100*o}),0===o&&(0,a.tZ)(w.Z,{animation:"wave",sx:{borderRadius:"8px",width:"3em"}})]})]})}),(0,a.tZ)(_.ZP,{item:!0,xs:12,lg:6,children:(0,a.BX)(k.Z,{css:e.box,children:[(0,a.tZ)(n.Z,{variant:"body2",css:e.title,children:t("market.totalBorrow")}),(0,a.BX)(n.Z,{variant:"h4",css:e.value,children:[i>0&&(0,m.RV)({shortenLargeValue:!0,value:100*i}),0===i&&(0,a.tZ)(w.Z,{animation:"wave",sx:{borderRadius:"8px",width:"3em"}})]})]})})]})}),(0,a.tZ)(Market_MarketTable,{})]})}}},function(t){t.O(0,[9774,2888,179],function(){return t(t.s=61553)}),_N_E=t.O()}]);
//# sourceMappingURL=markets-e3d54756f5ef93b8.js.map