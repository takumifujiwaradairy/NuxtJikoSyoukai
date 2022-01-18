import Vuex from 'vuex';

const createStore = () => {
    return  new Vuex.Store({
        state: () => ({
            todos: [
                {content:"資料の作成",created:"2022-1-18 18:30"},
                {content:"レビュー",created:"2022-1-23 15:30"}
            ]
        }),
        mutations:{
            insert: function(state,obj){
                var d = new Date();
                var fmt = d.getFullYear()
                            + '-' + ('00' + (d.getMonth()+ 1)).slice(-2) 
                            + '-' + ('00' + d.getDate()).slice(-2)
                            + ' ' + ('00' + d.getHours()).slice(-2)
                            + ':' + ('00' + d.getMinutes()).slice(-2);
                state.todos.unshift({
                    content: obj.content,
                    created: fmt
                })
                
            },
            remove: function(state,obj){
                for(let i= 0; i < state.todos.length; i++){
                    const ob = state.todos[i];
                    if(ob.content == obj.content && ob.created == obj.created){
                        alert('remove' + '"' + ob.content + '"');
                        state.todos.splice(i,1);
                        return;
                    }
                }
            }
        }
    })
}
export default createStore;