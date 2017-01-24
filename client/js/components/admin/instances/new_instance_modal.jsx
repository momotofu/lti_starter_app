import React              from 'react';
import ReactModal         from 'react-modal';
import ReactSelect        from 'react-select';
import NewDomainModal     from './new_domain_modal';

export default class NewInstanceModal extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    closeModal: React.PropTypes.func.isRequired,
    instances: React.PropTypes.shape({})
  };

  constructor() {
    super();
    this.state = {
      newDomainModalOpen: false,
      selectedDomain: ''
    };
  }

  selectDomain(option) {
    if (_.isFunction(option.onSelect)) {
      option.onSelect();
    }
    this.setState({ selectedDomain: option.value })
  }

  newDomain() {
    this.setState({ newDomainModalOpen: true });
  }

  closeNewDomainModal() {
    this.setState({ newDomainModalOpen: false, selectedDomain: '' });
  }

  showInstanceModal() {
    if (this.props.isOpen && !this.state.newDomainModalOpen) {
      return 'is-open';
    }
    return '';
  }

  closeModal() {
    this.setState({ newDomainModalOpen: false, selectedDomain: '' });
    this.props.closeModal();
  }

  render() {
    const options = _.map(this.props.instances, instance => ({
      label: instance.domain,
      value: instance.id
    })).concat({
      label: <div>Add New</div>,
      value: 'new',
      onSelect: () => this.newDomain()
    });

    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onRequestClose={() => this.closeModal()}
        contentLabel="Modal"
        overlayClassName="c-modal__background"
        className={`c-modal c-modal--settings ${this.showInstanceModal()}`}
      >
        <h2 className="c-modal__title">Attendance Settings</h2>
        <h3 className="c-modal__instance">Air University</h3>

        <div className="o-grid o-grid__modal-top">
          <div className="o-grid__item u-half">
            <div className="c-input"><span>Domain</span>
              <ReactSelect
                tabIndex="-1"
                ref={(ref) => { this.domainSelector = ref; }}
                options={options}
                value={this.state.selectedDomain}
                name="Domain"
                placeholder="Select a Domain"
                onChange={option => this.selectDomain(option)}
                searchable={false}
                arrowRenderer={() => null}
                clearable={false}
              />
            </div>
          </div>
          <div className="o-grid__item u-half">
            <label className="c-input"><span>LTI Key</span><input type="text" /></label>
          </div>
          <div className="o-grid__item u-half">
            <label className="c-input"><span>LTI Secret</span><input type="text" /></label>
          </div>
          <div className="o-grid__item u-half">
            <label className="c-input"><span>LTI Consumer</span><input type="text" /></label>
          </div>
          <div className="o-grid__item u-half">
            <label className="c-input"><span>Canvas Token</span><input type="text" /></label>
          </div>
        </div>

        <h3 className="c-modal__subtitle">Install Settings</h3>
        <div className="o-grid o-grid__bottom">
          <div className="o-grid__item u-third">
            <label className="c-checkbox"><input type="checkbox" />Account Navigation</label>
          </div>
          <div className="o-grid__item u-third">
            <label className="c-checkbox"><input type="checkbox" />General</label>
          </div>
          <div className="o-grid__item u-third">
            <label className="c-checkbox"><input type="checkbox" />Editor Button</label>
          </div>
          <div className="o-grid__item u-third">
            <label className="c-checkbox"><input type="checkbox" />Course Navigation</label>
          </div>
        </div>
        <button className="c-btn c-btn--yellow">Save</button>
        <button className="c-btn c-btn--gray--large u-m-right">Cancel</button>
        <NewDomainModal
          isOpen={this.state.newDomainModalOpen}
          closeModal={() => this.closeNewDomainModal()}
        />
      </ReactModal>
    );
  }
}