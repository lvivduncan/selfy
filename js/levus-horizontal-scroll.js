// 8-10-2020 -- 18-12-2021
{
    // scroll
    const scrolls = document.querySelectorAll('.levus-horizontal-scroll')
    
    for(let i = 0; i<scrolls.length; i++){
        
        let interval 

        const scroll = scrolls[i]

        const ul = scroll.querySelector('ul')

        // elements
        let li = ul.querySelectorAll('li')

        // if less than 4, cloned 
        if (li.length <= 4) {

            // cloned and append elements
            li.forEach(element => ul.append(element.cloneNode(true)))

            // new nodelist
            li = scroll.querySelectorAll('li')
        }

        scroll.innerHTML += '<div class="levus-nav"><span class="left"></span><span class="right"></span></div>'

        scroll.addEventListener('click', event => {

            const ul = scroll.querySelector('ul')

            if (event.target.className == 'left') {

                // move last element
                const last = ul.lastElementChild
                ul.prepend(last)

                // destroy transition
                ul.style.transition = 'none'
                ul.classList.add('to-right')
                
                setTimeout(() => {

                    ul.classList.remove('to-right')
                    ul.style.transition = '.5s'
                }, 50)
            }
        })

        scroll.addEventListener('click', event => {
            const ul = scroll.querySelector('ul')

            if (event.target.className == 'right') {

                // move first element
                const first = ul.firstElementChild
                ul.append(first)

                // destroy transition
                ul.style.transition = 'none'

                ul.classList.add('to-left')

                setTimeout(() => {

                    ul.classList.remove('to-left')
                    ul.style.transition = '.5s'
                }, 50)
            }
        })

        interval = setInterval(() => {

            const ul = scroll.querySelector('ul')

            // move first element
            const first = ul.firstElementChild

            ul.append(first)

            // destroy transition
            ul.style.transition = 'none'

            ul.classList.add('to-left')

            setTimeout(() => {

                ul.classList.remove('to-left')
                ul.style.transition = '.5s'
            }, 50)
         
        }, 3500)

        scroll.addEventListener('mouseover', () => {
            
            clearInterval(interval)
        })
        
        scroll.addEventListener('mouseout', () => {

            interval = setInterval(() => {

                const ul = scroll.querySelector('ul')

                // move first element
                const first = ul.firstElementChild
                ul.append(first)

                // destroy transition
                ul.style.transition = 'none'
                ul.classList.add('to-left')

                setTimeout(() => {

                    ul.classList.remove('to-left')
                    ul.style.transition = '.5s'
                }, 50)
            
            }, 3500)          
        })
    }
}