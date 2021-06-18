(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{db00:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex flex-center column"},[o("ch2",[t._v("\n    "+t._s(t.name)+"\n  ")]),o("q-img",{staticStyle:{"max-width":"300px",width:"250px"},attrs:{src:t.url}}),o("br"),o("container",[o("q-input",{attrs:{filled:"",label:"Nome do Pokemon"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),o("q-btn",{attrs:{color:"purple",label:"Procurar"},on:{click:t.getPokemon}})],1),o("div",{staticClass:"row justify-between full-width absolute container-arrows"},[o("q-icon",{staticClass:"q-ml-sm cursor-pointer",attrs:{name:"far fa-arrow-alt-circle-left",color:"primary",size:"40px"},on:{click:function(e){return t.getPokemon(t.id-1)}}},[o("q-tooltip",[t._v("\n          Anterior\n        ")])],1),o("q-icon",{staticClass:"q-mr-sm cursor-pointer",attrs:{name:"far fa-arrow-alt-circle-right",color:"primary",size:"40px"},on:{click:function(e){return t.getPokemon(t.id+1)}}},[o("q-tooltip",[t._v("\n          Próximo\n        ")])],1)],1)],1)},n=[],i=o("bc3a"),r=o.n(i);const s=r.a.create({baseURL:"https://pokeapi.co/api/v2",timeout:3e3});var c=s,l=o("9c56");let p,m,d=t=>t;const u=l["a"].h2(p||(p=d`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`)),h=l["a"].div(m||(m=d`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 250px;
  max-width: 50%;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`));var f={name:"PageIndex",components:{Ch2:u,Container:h},data(){return{name:"",url:"",search:"ditto",id:null}},async beforeMount(){await this.getPokemon()},methods:{getPokemon(t){c.get(t>0?`/pokemon/${t}`:`/pokemon/${this.search}`).then((t=>{console.log(t),this.id=t.data.id,this.name=t.data.name,this.search=t.data.name,this.url=t.data.sprites.other.dream_world.front_default})).catch((t=>{console.log(t),this.triggerNegative()})).then((()=>{}))},triggerPositive(){this.$q.notify({type:"positive",position:"top",message:`O Pokemon ${this.name} foi Encontrado`})},triggerNegative(){this.$q.notify({type:"negative",position:"top",message:"O Pokemon não foi Encontrado."})},retorna(){return this.id++}}},g=f,x=o("2877"),w=o("9989"),k=o("068f"),b=o("27f9"),v=o("9c40"),P=o("0016"),q=o("05c0"),y=o("eebe"),_=o.n(y),C=Object(x["a"])(g,a,n,!1,null,null,null);e["default"]=C.exports;_()(C,"components",{QPage:w["a"],QImg:k["a"],QInput:b["a"],QBtn:v["a"],QIcon:P["a"],QTooltip:q["a"]})}}]);