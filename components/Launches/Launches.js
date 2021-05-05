import React from 'react';
import LaunchFilter from '../LaunchFilter';
import LaunchItem from '../LaunchItem';

import styles from './launches.module.scss';

/**
 * Launches component responsible for showing the filter component,
 * handling the fetching and filtering of the launch data and rendering
 * the launches that match the selected filters
 */
class Launches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      launches: [],
      filter: {
        minYear: null,
        maxYear: null,
        keywords: null,
        launchPad: null,
      },
    };
  }

  handleFilterChange = filter => {};

  /**
   * Responsible for transforming the data from the launch and launchpad api's
   * into a usable and consistent format for the LaunchItem component
   */
  _launchDataTransform = (launchResp, launchPads) => {
    const resultObj = {
      rocketName: null,
      payloadId: null,
      launchDate: null,
      launchSiteName: null,
      flightNumber: null,
      missionFailed: null,
      missionPatchLink: null,
      redditCampaignLink: null,
      redditLaunchLink: null,
      redditMediaLink: null,
      pressKitLink: null,
      articleLink: null,
      videoLink: null,
    };

    return resultObj;
  };

  _renderLaunches = () => {
    const { launches } = this.state;

    const launchPadData = [];

    const launchFilter = () => {
      // do something with the filter obj
      return true;
    };

    const filteredLaunches = launches
      .map(l => this._launchDataTransform(l, launchPadData))
      .filter(launchFilter);

    return filteredLaunches.map(l => {
      console.log("check L: ", l);
      return <LaunchItem {...l} />
    });
  };

  render() {
    let obj = [{
      plane_name: "Falcon 1",
      flight_name: "Echostar 105",
      flight_number: "69",
      mission_status: false,
      mission_name: "Failed Mission",
      image_url: "https://images.app.goo.gl/BnCCnuurKUBoYZby9",
    },
    {
      plane_name: "Lion 1",
      flight_name: "Lion 123",
      flight_number: "01",
      mission_status: true,
      mission_name: "Success Mission",
      image_url: "https://images.app.goo.gl/DfUSzwZrc1qYLnDX9",
    },
    {
      plane_name: "Cat 1",
      flight_name: "Cat 456",
      flight_number: "02",
      mission_status: true,
      mission_name: "Impossible Mission",
      image_url: "https://images.app.goo.gl/83u7BvyZzcYsviJPA",
    },
    {
      plane_name: "Corgi 1",
      flight_name: "Corgi 789",
      flight_number: "03",
      mission_status: false,
      mission_name: "Great Mission",
      image_url: "https://images.app.goo.gl/6yTFXPwLtov7QdYZA",
    }
    
    ];

    return (
      <section className={`${styles.launches} layout-l`}>
        <LaunchFilter onFilterChange={this.handleFilterChange} />
        <div className={styles.summary}>
          <p>Showing 2 Missions</p>
        </div>
        {this._renderLaunches()}

        {/* 
            Example launch items, you should remove these once you have
            implemented the rendering logic 
        */}
        <LaunchItem ll={obj[0]}/>
        <LaunchItem ll={obj[1]}/>
        <LaunchItem ll={obj[2]}/>
        <LaunchItem ll={obj[3]}/>
      </section>
    );
  }
}

export default Launches;
