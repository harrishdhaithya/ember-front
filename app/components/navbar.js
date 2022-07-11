import Component from '@glimmer/component';
import { action } from '@ember/object';

class Navbar extends Component {
  @action
  logout(event) {
    event.preventDefault();
    alert('onclick done...');
  }
}
export default Navbar;
