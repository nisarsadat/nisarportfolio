export default function Devices() {
  return (
    <div className="device-stage">
      <div className="dev-scene">
        <div className="dev-laptop">
          <div className="dev-laptop-screen">
            <span className="dev-cam" />
            <div className="dev-browser">
              <div className="dev-browser-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="dev-viewport">
                <div className="dev-site">
                  <div className="d-nav">
                    <span className="d-logo" />
                    <span className="d-link" />
                    <span className="d-link" />
                    <span className="d-link" />
                  </div>
                  <div className="d-hero" />
                  <div className="d-line d-w85" />
                  <div className="d-line d-w65" />
                  <div className="d-cards">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="d-line d-w75" />
                  <div className="d-line d-w55" />
                  <div className="d-block" />
                  <div className="d-line d-w80" />
                  <div className="d-line d-w60" />
                </div>
              </div>
            </div>
          </div>
          <div className="dev-laptop-base">
            <span className="dev-base-notch" />
          </div>
        </div>
        <div className="dev-shadow dev-shadow-laptop" />

        <div className="dev-phone">
          <span className="dev-phone-notch" />
          <div className="dev-viewport">
            <div className="dev-site">
              <div className="d-mhero" />
              <div className="d-line d-w85" />
              <div className="d-line d-w65" />
              <div className="d-block" />
              <div className="d-line d-w75" />
              <div className="d-mcard" />
              <div className="d-line d-w55" />
              <div className="d-line d-w80" />
            </div>
          </div>
        </div>
        <div className="dev-shadow dev-shadow-phone" />
      </div>
      <p className="dev-caption">Fully responsive — built to adapt from phone screens to desktops.</p>
    </div>
  )
}
