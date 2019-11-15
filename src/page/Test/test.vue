<template>
  <div class="box">
    <div class="box_warp">
      <vue-org-tree
        :treeData="treeData"
        :append="false"
        :edit="false"
        :remove="false"
        :images="false"
      ></vue-org-tree>
    </div>
  </div>
</template>

<script>


  import VueOrgTree from './OrgTree';
  export default {
    name: "test",
    components: {VueOrgTree},//在组件内注册
    data(){
      return{
        treeData:{
          name: "Seven Dwarfs",
          photo: "./img/4.jpg",
          children: [{
            name: "Minnie Mouse",
            photo: "./img/1.jpg"
          },
            {
              name: "Tom Bombadil",
              photo: "./img/3.jpg",
              children: [{
                name: "No Name",
                photo: "./img/12.jpg",
                children: [{
                  name: "Sleeping Beauty",
                  photo: "./img/5.jpg"
                },
                  {
                    name: "Michael Jackson",
                    photo: "./img/6.jpg"
                  }
                ]
              },
              ]
            }]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    width: 100%;
    height: 1000px;

    .box_warp {
      width: 100%;
      height: 100%;
      .content{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>