class View {
    #sectionElements = document.querySelector('.elements')
    #data
    #selectList = document.querySelector('.infobox__list');

    render(data, visibility) {
        this.#data = data
        const markup = this.#generateCode(visibility)
        this.#sectionElements.insertAdjacentHTML("afterbegin", markup)
        document.querySelector('.element__delete').addEventListener('click', function (evt) {
            const d = evt.target.parentElement;
            d.classList.remove('element_visible')
            d.classList.add('element_hide');

            setTimeout(() => {
                d.remove();
            }, 300);

        });

    }

    

    fillList(el) { 
        for (let i = 0; i < el; i++) {
            this.#selectList.insertAdjacentHTML("beforeend", `<option>${i + 1}</option>`)
        }
    }

    #generateCode(visibility) {
        return `<div class="create-element element ${visibility} "> 
        <button class="element__delete" type="button"></button>

        <img crossorigin="anonymous" src="${this.#data.avatar}" class="element__image" alt="user id:${this.#data.id} photo">


        <div class="element__container">
            <h2 class="element__title">${this.#data.first_name} ${this.#data.last_name}</h2>
            <p class="element__description">${this.#data.email}</p>
            <p class="element__description">id: ${this.#data.id}</p>

        </div>
        </div>`
    }
}

export default new View()