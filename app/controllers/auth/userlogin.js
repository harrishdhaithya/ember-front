import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class AuthUserloginController extends Controller {
  @service router;
  @action
  login(event) {
    event.preventDefault();
    const emailVal = email.value;
    const passwordVal = password.value;
    if (!emailVal || !passwordVal) {
      alert('All the fields are required');
      return;
    }
    fetch(`http://localhost:9090/bank/auth/user/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email: emailVal,
        password: passwordVal,
      }),
    }).then((resp) => {
      if (resp.status == 200) {
        resp.text().then((res) => {
          document.cookie = 'JSESSIONID=' + res;
          this.router.transitionTo('auth.verify');
        });
      } else {
        alert('failed');
      }
    });
  }
}
