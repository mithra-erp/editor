const showLoading = () => {
    if (document.querySelector(".loading") === null) {
        let loading = document.createElement('div');
        loading.innerHTML = "Loading&#8230;";
        loading.className = "loading";
        document.querySelector('body').appendChild(loading)
    }
}

const stopLoading = () => {
    const e = document.querySelector(".loading");
    if (e != null)
        e.parentElement.removeChild(e);
}