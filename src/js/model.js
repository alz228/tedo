export const state = {
    person: {}

};

export const loadData = async function(id){
    try{
    let response = await fetch(`https://reqres.in/api/users/${id}`)
          let resJson = await response.json()
    
          if (!response.ok) throw new Error(`${data.message} (${response.status})`)
    
          state.person = {
             avatar: resJson.data.avatar,
             email: resJson.data.email,
             first_name: resJson.data.first_name,
             id: resJson.data.id,
             last_name: resJson.data.last_name
          }
    
        }
        catch(err){
            console.log(err)
        }

}

