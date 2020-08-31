import React, { Component } from "react";
import OlMap from "ol/map";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";

class PublicMap extends Component {
  olmap: any;
  mapState() {
    return { center: [0, 0], zoom: 1 };
  }
  constructor(props: any) {
    super(props);

    this.olmap = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM(),
        }),
      ],
      view: new OlView({
        center: this.mapState().center,
        zoom: this.mapState().zoom,
      }),
    });
  }

  updateMap() {
    this.olmap.getView().setCenter(this.mapState().center);
    this.olmap.getView().setZoom(this.mapState().zoom);
  }

  componentDidMount() {
    this.olmap.setTarget("map");

    // Listen to map changes
    this.olmap.on("moveend", () => {
      let center = this.olmap.getView().getCenter();
      let zoom = this.olmap.getView().getZoom();
      this.setState({ center, zoom });
    });
  }

  shouldComponentUpdate(_nextProps: any, nextState: any) {
    let center = this.olmap.getView().getCenter();
    let zoom = this.olmap.getView().getZoom();
    if (center === nextState.center && zoom === nextState.zoom) return false;
    return true;
  }

  userAction() {
    this.setState({ center: [546000, 6868000], zoom: 5 });
  }

  render() {
    this.updateMap(); // Update map on render?
    return (
      <div id="map" style={{ width: "100%", height: "360px" }}>
        <button onClick={(_e) => this.userAction()}>setState on click</button>
      </div>
    );
  }
}

export default PublicMap;
