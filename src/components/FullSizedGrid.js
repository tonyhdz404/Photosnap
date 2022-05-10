import { pricingPageImgs } from "../data";
export default function FullSizedGrid() {
  return (
    <div className="compare-grid">
      <h4 className="compare-grid-title col-1">The Features</h4>
      <h4 className="compare-grid-title">Basic</h4>
      <h4 className="compare-grid-title">Pro</h4>
      <h4 className="compare-grid-title">Business</h4>
      <div className="header-divider"></div>
      <h4 className="compare-grid-subtitle col-1">Unlimited Story Posting</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="basic" />
      <img src={pricingPageImgs.checkIcon} alt="Check" className="pro" />
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />

      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Unlimited Photo Upload</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="basic" />
      <img src={pricingPageImgs.checkIcon} alt="Check" className="pro" />
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />

      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Embedding Custom Content</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="pro" />
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />

      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Customize Metadata</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="pro" />
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />

      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Advanced Metrics</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />

      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Photo Downloads</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />

      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Search Engine Indexing</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />
      <div className="divider"></div>
      <h4 className="compare-grid-subtitle col-1">Custom Analytics</h4>
      {/* CHECKMARKS */}
      <img src={pricingPageImgs.checkIcon} alt="Check" className="business" />
      <div className="divider"></div>
    </div>
  );
}
