import nodeUtil from"../utils/node-util";Component({externalClasses:["l-anchor-class"],options:{multipleSlots:!0,pureDataPattern:/^_/},relations:{"../index-list/index":{type:"parent"}},data:{anchorSlot:{height:-1},anchor:{height:0},anchorText:"",anchorStyle:"",anchorWrapperStyle:""},lifetimes:{attached(){this.parseAnchorSlotRect()}},methods:{async parseAnchorSlotRect(){const t=await nodeUtil.getNodeRectFromComponent(this,".anchor-slot");t?this.setData({"anchorSlot.height":t.height}):this.setData({"anchorSlot.height":0})},async parseAnchorRect(){const t=await nodeUtil.getNodeRectFromComponent(this,".anchor");t&&this.setData({"anchor.height":t.height})},setFixed(t,e){const a=`\n        position:fixed;\n        top:${t}rpx;\n      `,n=`height:${e}px;`;this.setData({anchorStyle:a,anchorWrapperStyle:n})},setRelative(t){const e=`\n        position:relative;\n        transform: translate3d(0, ${t}px, 0);\n       `;this.setData({anchorStyle:e})},clearStyle(){this.setData({anchorStyle:"",anchorWrapperStyle:""})},isRelative(){return this.data.anchorStyle.indexOf("relative")>0},isFixed(){return this.data.anchorStyle.indexOf("fixed")>0}}});