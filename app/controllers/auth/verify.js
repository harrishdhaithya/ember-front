import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class AuthVerifyController extends Controller {
  @service router;
  @action
  makeVerification(event) {
    event.preventDefault();
    const codeValue = code.value;
    const param = new URLSearchParams({
      code: codeValue.trim(),
    });

    fetch(`http://localhost:9090/bank/auth/user/secret?${param.toString()}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        cookie: document.cookie,
      },
    }).then((resp) => {
      if (resp.status == 200) {
        alert('Success');
        resp.json().then((obj) => {
          if (typeof window !== undefined) {
            localStorage.setItem(
              'auth',
              JSON.stringify({
                uid: obj.accno,
                role: obj.role,
              })
            );
            this.router.transitionTo(obj.role + '.home');
          }
          alert('Working...');
          console.log(obj);
        });
      } else {
        resp.text().then((res) => console.log(res));
        return;
      }
    });
  }
}
