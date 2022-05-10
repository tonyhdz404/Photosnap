import { pricingPageImgs } from "../data";
export default function SmallGrid() {
  return (
    <div className="mobile-grid">
      <h4 className="mobile-grid-header">the features</h4>
      <div className="mobile-grid-divider mobile-grid-divider--main"></div>
      {/* One row */}
      <h4 className="mobile-row-header mobile-grid-header">
        UNLIMITED STORY POSTING
      </h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-basic"
        />
        <h6 className="mobile-grid-row-col-title">PRO</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-pro"
        />
        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Two */}
      <h4 className="mobile-row-header mobile-grid-header">
        UNLIMITED PHOTO UPLOAD
      </h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-basic"
        />
        <h6 className="mobile-grid-row-col-title">PRO</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-pro"
        />
        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Three */}
      <h4 className="mobile-row-header mobile-grid-header">
        EMBEDDING CUSTOM CONTENT
      </h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <h6 className="mobile-grid-row-col-title">PRO</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-pro"
        />
        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Four */}
      <h4 className="mobile-row-header mobile-grid-header">
        CUSTOMIZE METADATA
      </h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <h6 className="mobile-grid-row-col-title">PRO</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-pro"
        />
        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Five */}
      <h4 className="mobile-row-header mobile-grid-header">ADVANCED METRICS</h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <h6 className="mobile-grid-row-col-title">PRO</h6>

        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Six */}
      <h4 className="mobile-row-header mobile-grid-header">PHOTO DOWNLOADS</h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <h6 className="mobile-grid-row-col-title">PRO</h6>

        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Seven */}
      <h4 className="mobile-row-header mobile-grid-header">
        SEARCH ENGINE INDEXING
      </h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <h6 className="mobile-grid-row-col-title">PRO</h6>

        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--minor"></div>
      {/* Row Eight */}
      <h4 className="mobile-row-header mobile-grid-header">CUSTOM ANALYTICS</h4>
      <div className="mobile-grid-row">
        <h6 className="mobile-grid-row-col-title">BASIC</h6>
        <h6 className="mobile-grid-row-col-title">PRO</h6>

        <h6 className="mobile-grid-row-col-title">BUSINESS</h6>
        <img
          src={pricingPageImgs.checkIcon}
          alt="Check"
          className="mobile-check mobile-business"
        />
      </div>
      {/* End of Row */}
      <div className="mobile-grid-divider mobile-grid-divider--last mobile-grid-divider--minor"></div>
    </div>
  );
}
