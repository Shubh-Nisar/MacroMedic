import React from "react";
import {
  StyleSheet,
  ScrollView,
  Platform,
  LogBox,
  FlatList,
  View,
} from "react-native";
import { LinearGradient as Gradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";
// import { Card } from "react-native-paper";
// import { PRIMARY } from "../Utils/colors";

// galio components
import { Button, Block, Icon, Text, NavBar } from "galio-framework";
import theme from "../Components/theme";

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_YELLOW = ["#FFD400", "#FFEA61"];
const GRADIENT_GREEN = ["#57C84D", "#ABE098"];
const GRADIENT_RED = ["#EA4C46", "#F6BDC0"];
const GRADIENT_PINK = ["#D442F8", "#B645F5", "#9B40F8"];
const GRADIENT_BLUE = ["#7AD7F0", "#B7E9F7"];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';

// mock data
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);
const cards = [
  {
    title: "Total Users",
    subtitle: "39 (just updated)",
    icon: "list-bullet",
    iconFamily: "Galio",
  },

  {
    title: "Doctors Added",
    subtitle: "7 (in last 12 hours)",
    icon: "bag-17",
    iconFamily: "Galio",
  },
  {
    title: "Total Appointments",
    subtitle: "27 (tracked from CodeX)",
    icon: "credit-card",
    iconFamily: "Galio",
  },

  {
    title: "Registered Doctors",
    subtitle: "18 (just updated)",
    icon: "settings-gear-65",
    iconFamily: "Galio",
  },
];
const data = [
  { ID: "1", Name: "Dr. Verma", Date: "Sat 20 Mar", Status: "Pending" },
  { ID: "2", Name: "Dr. Verma", Date: "Sat 20 Mar", Status: "Pending" },
  { ID: "3", Name: "Dr. Verma", Date: "Sat 20 Mar", Status: "Pending" },
  { ID: "4", Name: "Dr. Verma", Date: "Sat 20 Mar", Status: "Pending" },
];
const statsTitles = ["M", "T", "W", "Th", "F", "S", "Su"];

class Home extends React.Component {
  renderHeader = () => (
    <NavBar
      title="Dashboard"
      titleStyle={{ fontSize: 18 }}
      //   onLeftPress={() => this.props.navigation.openDrawer()}
      //   leftIconColor={theme.COLORS.MUTED}
      left={
        <Button
          color="transparent"
          style={styles.settings}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Ionicons size={30} name="md-menu" color={theme.COLORS.MUTED} />
        </Button>
      }
      style={Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null}
    />
  );

  renderStats = () => {
    const GradientStats = () => (
      <Defs key="gradient">
        <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={theme.COLORS.THEME} />
          <Stop offset="100%" stopColor={theme.COLORS.INFO} />
        </LinearGradient>
      </Defs>
    );

    const statsActive = [12, 17, 7, 17, 23, 18, 38];
    const statsInactive = [10, 8, 13, 11, 26, 8, 30];

    return (
      <Block style={{ marginBottom: BASE_SIZE * 3 }}>
        <AreaChart
          yMin={0}
          yMax={Math.max(...statsActive) + 1}
          data={statsInactive}
          curve={shape.curveNatural}
          style={[StyleSheet.absoluteFill]}
          contentInset={{
            bottom: -BASE_SIZE * 0.15,
            right: -BASE_SIZE * 0.15,
            left: -BASE_SIZE * 0.15,
          }}
          svg={{
            strokeWidth: 1,
            stroke: "rgba(0,0,0,0.2)",
            strokeDasharray: 4,
          }}
        >
          <GradientStats />
        </AreaChart>
        <AreaChart
          yMin={0}
          yMax={Math.max(...statsActive) + 1}
          data={statsActive}
          curve={shape.curveNatural}
          style={{ height: BASE_SIZE * 10 }}
          contentInset={{
            bottom: -BASE_SIZE * 0.21,
            right: -BASE_SIZE * 0.21,
            left: -BASE_SIZE * 0.21,
          }}
          svg={{ strokeWidth: BASE_SIZE * 0.1875, stroke: "url(#gradient)" }}
        >
          <GradientStats />
        </AreaChart>
        <Block row space="evenly" style={{ marginTop: BASE_SIZE }}>
          {statsTitles.map((title) => (
            <Text key={title} size={theme.SIZES.FONT * 0.85} muted>
              {title}
            </Text>
          ))}
        </Block>
      </Block>
    );
  };

  renderCard = (props, index) => {
    let gradientColors;
    if (index == 0) {
      gradientColors = GRADIENT_YELLOW;
    } else if (index == 1) {
      gradientColors = GRADIENT_GREEN;
    } else if (index == 2) {
      gradientColors = GRADIENT_RED;
    } else {
      gradientColors = GRADIENT_BLUE;
    }

    return (
      <Block
        row
        center
        card
        shadow
        space="between"
        style={styles.card}
        key={props.title}
      >
        <Gradient
          start={[0.45, 0.45]}
          end={[0.9, 0.9]}
          colors={gradientColors}
          style={[styles.gradient, styles.left]}
        >
          <Icon
            size={BASE_SIZE}
            name={props.icon}
            color={COLOR_WHITE}
            family={props.iconFamily}
          />
        </Gradient>

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{props.title}</Text>
          <Text size={BASE_SIZE * 0.875} muted>
            {props.subtitle}
          </Text>
        </Block>
        <Button style={styles.right}>
          <Icon
            size={BASE_SIZE}
            name="minimal-right"
            family="Galio"
            color={COLOR_GREY}
          />
        </Button>
      </Block>
    );
  };

  renderCards = () => cards.map((card, index) => this.renderCard(card, index));

  render() {
    return (
      <Block safe flex>
        {/* header */}
        {/* {this.renderHeader()} */}

        {/* stats */}
        {this.renderStats()}

        {/* cards */}
        <ScrollView style={{ flex: 1 }}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderColor: "transparent",
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: "transparent",
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: "transparent",
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: "transparent",
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
