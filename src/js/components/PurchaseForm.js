import { DOM } from '../constants.js';

class PurchaseForm {
  render() {
    return `
			<form class="mt-5">
				<label class="mb-2 d-inline-block">
					구입할 금액을 입력해주세요.
				</label>
				<div class="d-flex">
					<input
						id="${DOM.purchaseFormInput}"
						type="number"
						class="w-100 mr-2 pl-2"
						placeholder="구입 금액"
					/>
					<button
						type="button"
						id="${DOM.purchaseFormButton}"
						class="btn btn-cyan"
					>
						확인
					</button>
				</div>
			</form>
		`;
  }
}

export default PurchaseForm;
