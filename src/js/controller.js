import * as model from './model.js'
import view from './view.js'


const addButton = document.querySelector('.infobox__add-button');

const getResponse = async function (id, visibility) {

    try {
        await model.loadData(id)
        view.render(model.state.person, visibility)
    }
    catch (err) {
        alert(err)
    }
}

getResponse(1, '')
getResponse(2, '')
getResponse(3, '')

view.fillList(12)


const addCart =  function(){

    let listValue = 1
    document.querySelector('.infobox__list').addEventListener('change', function () {
       listValue = this.value
    })

addButton.addEventListener('click', async function () {
   await getResponse(listValue, 'element_hide')
    addButton.disabled = true
    setTimeout(() => {
        document.querySelector('.element').classList.remove('element_hide')
        document.querySelector('.element').classList.add('element_visible')
    }, 300)
    setTimeout(() => {
        addButton.disabled = false
    }, 1000);
})
}
addCart()


