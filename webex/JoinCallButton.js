import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, View} from 'react-native';

import Timer from './Timer';

const styles = StyleSheet.create({
  join: {
    width: 55,
    height: 47.5
  },
  joinButton: {
    height: 25,
    width: 55,
    color: '#fff',
    borderRadius: 25
  },
  duration: {
    textAlign: 'center',
    color: '#30d557',
    fontSize: 13
  }
});

function JoinCallButton({callStartTime, onJoinClick}) {
  return (
    <View className="ciscospark-join-call" style={styles.join}>
      <Button
        accessibilityLabel="Join Call"
        className="ciscospark-join-call-button"
        color="#30d557"
        title="Join"
        onPress={onJoinClick}
        style={styles.joinButton}
      />
      <Timer className="ciscospark-join-call-duration" startTime={callStartTime} style={styles.duration} />
    </View>
  );
}

JoinCallButton.propTypes = {
  callStartTime: PropTypes.number.isRequired,
  onJoinClick: PropTypes.func.isRequired
};

export default JoinCallButton;
