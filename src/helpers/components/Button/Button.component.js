import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useTheme} from 'react-native-paper';
import {Typography} from '../typography/typography';
import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {setBgColor, setMargin} from '../global.styles';
const ThemedButton = props => {
  const {
    children,
    bgColor,
    size,
    color,
    rippleRadius,
    iconName,
    family,
    typoStyle,
  } = props;
  const {colors} = useTheme();
  const paddingSize =
    size === 'small'
      ? {paddingHorizontal: 14, paddingVertical: 8, borderRadius: 12}
      : {paddingHorizontal: 20, paddingVertical: 15, borderRadius: 20};
  const fontSize = size === 'small' ? 12 : 14;
  return (
    <View style={[setMargin(props), {overflow: 'hidden', borderRadius: 20}]}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          bgColor === 'secondary'
            ? colors.secondary_hover
            : colors.primary_hover,
          false,
          rippleRadius,
        )}
        {...props}>
        <View
          style={[
            styles.viewButton,
            {
              backgroundColor: setBgColor(bgColor),
              ...paddingSize,
            },
          ]}>
          {iconName ? (
            <Icon
              name={iconName}
              style={[styles.icon, {color: color ? color : colors.white}]}
            />
          ) : null}
          <Typography
            family={family || 'medium'}
            size={fontSize}
            textAlign="center"
            style={typoStyle}
            color={color || colors.white}>
            {children}
          </Typography>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

ThemedButton.propTypes = {
  children: PropTypes.any,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  rippleRadius: PropTypes.number,
  iconName: PropTypes.string,
  family: PropTypes.string,
};

export default memo(ThemedButton);
