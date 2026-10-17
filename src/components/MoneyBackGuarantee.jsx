import './MoneyBackGuarantee.css';

export default function MoneyBackGuarantee() {
  return (
    <section className="money-back-guarantee">
      <div className="container">
        <div className="guarantee-content">
          <div className="guarantee-icon">🛡️</div>
          <h2>100% Money Back Guarantee</h2>
          <p className="guarantee-intro">
            We're confident you'll love this course. If you don't, we'll refund
            every penny.
          </p>

          <div className="guarantee-items">
            <div className="guarantee-item">
              <div className="item-icon">✓</div>
              <h3>30-Day Full Refund</h3>
              <p>
                Not satisfied? Get a complete refund within 30 days of purchase,
                no questions asked, no hassle.
              </p>
            </div>
            <div className="guarantee-item">
              <div className="item-icon">✓</div>
              <h3>Lifetime Course Access</h3>
              <p>
                Keep lifetime access to all course materials and future updates
                even if you request a refund.
              </p>
            </div>
          </div>

          <p className="guarantee-footer">
            We stand behind our training. Your success is our priority, and we
            want you to feel 100% confident in your investment.
          </p>
        </div>
      </div>
    </section>
  );
}
