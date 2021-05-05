import React from 'react';
import PropTypes from 'prop-types';

import styles from './launch-item.module.scss';

/**
 * Launch Item renders all the details of a 
 * given launch
 */
const LaunchItem = ({ll}) => (
  
  <article className={styles.launchItem}>
    <div className={styles.patchContainer}>
      <img
        className={styles.patch}
        alt="Mission patch"
        src={ll.image_url}
      />
    </div>
    <div className={styles.detailsContainer}>
      <p className={styles.title}>
        {ll.plane_name} - {ll.flight_name} - 
        <span className={(ll.mission_status)? styles.success : styles.failed}>{ll.mission_name}</span>
      </p>
      <p className={styles.subtitle}>
        Launched <strong>11th October 2017</strong> at <strong>6:53pm</strong>{' '}
        from <strong>Kennedy Space Center Launch Complex 39A</strong>
      </p>
      <div className={styles.links}>
        <a href="." className={styles.link}>
          Reddit Campaign
        </a>
        <a href="." className={styles.link}>
          Reddit Launch
        </a>
        <a href="." className={styles.link}>
          Reddit Media
        </a>
        <a href="." className={styles.link}>
          Press Kit
        </a>
        <a href="." className={styles.link}>
          Article
        </a>
        <a href="." className={styles.link}>
          Watch Video
        </a>
      </div>
    </div>
    <dl className={styles.flightNumber}>
      <dt>Flight Number</dt>
      <dd>#{ll.flight_number}</dd>
    </dl>
  </article>
);

LaunchItem.propTypes = {
  // name of the rocket used
  rocketName: PropTypes.string,

  // payload id of rocket
  payloadId: PropTypes.string,

  // the date of launch
  launchDate: PropTypes.string,

  // the launch pad the mission launched from
  launchSiteName: PropTypes.string,

  // flight number of the rocket
  flightNumber: PropTypes.string,

  // whether the mission failed or not defined,
  // as when the launch or landing was not successful
  missionFailed: PropTypes.string,

  // link to the mission patch image
  missionPatchLink: PropTypes.string,

  // link to the reddit campaign
  redditCampaignLink: PropTypes.string,

  // link to the reddit launch thread
  redditLaunchLink: PropTypes.string,

  // link to the reddit media thread
  redditMediaLink: PropTypes.string,

  // link to the press kit page
  pressKitLink: PropTypes.string,

  // link to the launch article page
  articleLink: PropTypes.string,

  // link to video of the mission
  videoLink: PropTypes.string,
}

export default LaunchItem;
