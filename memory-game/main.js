const above = document.getElementsByClassName("above")
const under = document.getElementsByClassName("under")
const one = document.getElementsByClassName("one")[0]
const  two= document.getElementsByClassName("two")[0]
const  three = document.getElementsByClassName("three")[0]
const  four= document.getElementsByClassName("four")[0]
const  five = document.getElementsByClassName("five")[0]
const  six = document.getElementsByClassName("six")[0]
const img1 = document.createElement('img')
img1.src='https://i.pinimg.com/736x/d4/28/b1/d428b1aeab6f8dc0b1155fc7bf450812.jpg'
img1.style.width='198px'
img1.style.height='198px'
const img2 = document.createElement('img')
img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjod-kVyXTiIKSvrZ_nd-zTh5l2axFpfLwRw&s'
img2.style.width='198px'
img2.style.height='198px'
const img3 = document.createElement('img')
img3.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiCFH_xI26X9GvSZH3IZj1mNaRu4-QoaNkQ&s'
img3.style.width='198px'
img3.style.height='198px'
const images = [img1, img2, img3]

function getRandomElement(arr){
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

    if(one){
        one.addEventListener('click', function(){
           
            const chosen = getRandomElement(images)
          
            one.append(chosen)
        });
    }
    if(two){
        two.addEventListener('click', function(){

            const chosen = getRandomElement(images)
          
            two.append(chosen)
        });
    }

    if(three){
        three.addEventListener('click', function(){
            const chosen = getRandomElement(images)
          
            three.append(chosen)
        });
    }

    if(four){
        four.addEventListener('click', function(){
            const chosen = getRandomElement(images)
          
            four.append(chosen)
        });
    }

    if(five){
        five.addEventListener('click', function(){
            const chosen = getRandomElement(images)
          
            five.append(chosen)
        });
    }

    if(six){
        six.addEventListener('click', function(){
            const chosen = getRandomElement(images)
          
            six.append(chosen)
        });
    }