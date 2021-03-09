import { Button } from './button.js';
import './modal.scss';
export class Modal {
    constructor(target = document.querySelector('body')) {
        this._target = target;
        this._render();
    }

    _render() {
        this._modalOutlet = document.createElement('div');
        this._content = document.createElement('div');

        this._modalOutlet.classList.add('modal__outlet');
        this._content.classList.add('modal__content');

        this._modalOutlet.appendChild(this._content);
        this._target.appendChild(this._modalOutlet);
        this._closeButton = new Button(this._modalOutlet, 'CLOSE', () => this.hide());
        
    }

    show(content) {
        this._modalOutlet.classList.add('modal__outlet_active');
        this._content.innerHTML = content;
    }

    hide() {
        this._modalOutlet.classList.remove('modal__outlet_active');
    }
}