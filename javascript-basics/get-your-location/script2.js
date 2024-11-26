const locate = document.getElementById('locate')

function success(loc){
    console.log(loc);
}

function failure(){
    console.log('There was some issue');
}

locate.addEventListener('click', () => {
    const location = navigator.geolocation.getCurrentPosition(success, failure);
})