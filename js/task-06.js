

const refs = {
    input: document.querySelector("#validation-input"),
  }; 
  const validationEl = refs.input.dataset.length; 
  refs.input.addEventListener("blur", onInputBlur); 
  function onInputBlur(value) {
    if (Number(validationEl) === value.target.value.length) {
      refs.input.classList.remove("invalid");
      refs.input.classList.add("valid");
    } else {
      refs.input.classList.add("invalid");
      refs.input.classList.remove("valid");
    }
  }
  



