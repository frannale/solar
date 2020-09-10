import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from 'classnames';
import CountUp from "react-countup";

const SelfCard = (props) => {
  return (
        <Grid item component={Card} xs={8} md={3} className={cx(styles.card, props.style)}>
            <CardContent>
                <Typography variant="h5" color="textSecondary" gutterBottom>{props.title}</Typography>
                <Typography variant="h4">
                <CountUp start={0} end={props.data} duration={2} decimals={2} />
                </Typography>
                <Typography  variant="h5" color="textSecondary">{props.date}</Typography>
            </CardContent>
        </Grid>
  );
};

export default SelfCard;
