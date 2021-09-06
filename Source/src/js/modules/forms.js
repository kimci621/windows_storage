import numChecker from './checkInputsforNum';

const forms = (formObj) => {
  const form = document.querySelectorAll('form');
  const input = document.querySelectorAll('input');
  const windows = document.querySelectorAll('[data-popup]');

  numChecker('input[name="user_phone"]');

  const message = {
    ok: 'Спасибо! Скоро наш Менеджер с вами свяжется!',
    load: 'Идёт загрузка...',
    fail: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.load;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    // console.log(res);
    return await res.text();
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let status = document.createElement('div');
      status.classList.add('status');
      item.appendChild(status);

      const formData = new FormData(item);

      if (item.getAttribute("data-end") === "end") {
        for (let key in formObj) {
          formData.append(key, formObj[key]);
        }
        // console.log(formData);
        // console.log(formObj);
      }

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          status.textContent = message.ok;
        })
        .catch(() => {
          status.textContent = message.fail;
          console.log(message.fail);
        })
        .finally(() => {
          input.forEach(item => {
            item.value = '';
          });
          setTimeout(() => {
            status.remove();
            windows.forEach(item => {
              item.style.display = "none";
            });
            document.body.style.overflow = "";
            formObj = {};
          }, 3000);
        });
    });
  });

};

export default forms;