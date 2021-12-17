const app = new Vue({
    el: '#app',
    data: {
        txt: "",
      todos: 
      [
          {
              intro: "intro",
              text: "testo di prova",
              author: "Pippo"
          },
          {
            intro: "intro",
            text: "testo di prova2",
            author: "Mario"
        },
        {
            intro: "intro",
            text: "testo di prova3",
            author: "Giacomo"
        }
      ]
    },
    methods : {

        addNew : function (){
            if (this.txt.length != 0) {
                let  objct = {
                  intro: "intro",
                  text: this.txt,
                  author: "Pippo"
                  }
                  this.todos.push(objct);  
                }
                this.txt = ""
            },
        
            deleteThis : function (index) {
            console.log("ciao");
            this.todos.splice(index, 1);
        }
    }
  })