import './PricingTable.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PricingTable = () => {
  return (
    <div className="pricing-table">
      <div className="card">
        <h3 style={{ textAlign: 'center' }}>FREE</h3>
        <p className="price" style={{ textAlign: 'center' }}><h2>$0/month</h2></p><hr />
        <ul>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Single User</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>50GB Storage</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Public Projects</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Community Access</b></li>
          <li style={{ color: 'rgb(176, 172, 172)'}}><i className="fa fa-times" aria-hidden="true"></i> &nbsp; Unlimited Private Projects</li>
          <li style={{ color: 'rgb(176, 172, 172)'}}><i className="fa fa-times" aria-hidden="true"></i> &nbsp; Dedicated Phone Support</li>
          <li style={{ color: 'rgb(176, 172, 172)'}}><i className="fa fa-times" aria-hidden="true"></i> &nbsp; Free Subdomain</li>
          <li style={{ color: 'rgb(176, 172, 172)'}}><i className="fa fa-times" aria-hidden="true"></i> &nbsp; Monthly Status Reports</li>
        </ul>
        <button className='buttonColor'>BUTTON</button>
      </div>

      <div className="card">
        <h3 style={{ textAlign: 'center' }}>PLUS</h3>
        <p className="price" style={{ textAlign: 'center' }}><h2>$9/month</h2></p><hr />
        <ul>
        <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Users</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>50GB Storage</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Public Projects</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Community Access</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Private Projects</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Dedicated Phone Support</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Free Subdomain</b></li>
          <li style={{ color: 'rgb(176, 172, 172)'}}><i className="fa fa-times" aria-hidden="true"></i> &nbsp; Monthly Status Reports</li>
        </ul>
        <button className='buttonColor'>BUTTON</button>
      </div>

      <div className="card">
        <h3 style={{ textAlign: 'center' }}>PRO</h3>
        <p className="price" style={{ textAlign: 'center' }}><h2>$49/month</h2></p><hr />
        <ul>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Users</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>50GB Storage</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Public Projects</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Community Access</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Unlimited Private Projects</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Dedicated Phone Support</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Free Subdomain</b></li>
          <li><i className="fa fa-check" aria-hidden="true"></i> &nbsp; <b>Monthly Status Reports</b></li>
        </ul>
        <button className='buttonColor'>BUTTON</button>
      </div>
    </div>
  );
};

export default PricingTable;
