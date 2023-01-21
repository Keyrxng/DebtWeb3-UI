import { Grid, Card, Typography, Button, Container } from '@mui/material';
import React from 'react';
import styles from "../styles/Home.module.css";

interface Token {
    name: string;
    symbol: string;
}
interface TVL {
    value: string;
    token: string;
}

interface Pool {
    id: number;
    tokens: Token[];
    tvl: TVL;
    pairShare: string;
    dailyVolume: string;
    feesEarned: string;
}

interface Props {
    pools: Pool[];
}

const Pools: React.FC<Props> = ({ pools }) => {
    return (
        <Container maxWidth="lg" style={{ padding: "50px", margin: "auto" }}>
            <Grid container spacing={3}>
                {pools.map((pool) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={pool.id}>
                            <Card style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography gutterBottom style={{ textAlign: "center", padding: "10px" }} variant="h5" component="h2">
                                    Pool - {pool.id}
                                </Typography>
                                <Typography style={{ textAlign: "center", padding: "10px" }} variant="h6" component="h3">
                                    {pool.tokens.map((token) => {
                                        return `${token.name.toUpperCase()}(${token.symbol})`
                                    }).join('-')}
                                </Typography>
                                <Typography gutterBottom style={{ textAlign: "center", padding: "10px" }} variant="body1">
                                    Current Volume: {pool.tvl.value} {pool.tvl.token}
                                </Typography>
                                <Typography gutterBottom style={{ textAlign: "center", padding: "10px" }} variant="body1">
                                    Pair Share: {pool.pairShare}
                                </Typography>
                                <Typography gutterBottom style={{ textAlign: "center", padding: "10px" }} variant="body1">
                                    Daily Volume: {pool.dailyVolume}
                                </Typography>
                                <Typography gutterBottom style={{ textAlign: "center", padding: "10px" }} variant="body1">
                                    Fees earned: {pool.feesEarned}
                                </Typography>
                                <Typography gutterBottom style={{ textAlign: "center", padding: "10px" }} variant="body1">
                                    Currently Staked: 0 {pool.tokens[0].symbol}
                                </Typography>                                
                                <Button variant="outlined" color="warning" className={styles.animated_border} style={{ marginTop: "10px",  marginRight: "2px" }}>Deposit</Button>
                                <Button variant="outlined" color="warning"  style={{ marginTop: "10px", marginBottom: '10px', marginLeft: "2px" }}>Withdraw</Button>                                
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
}

export default Pools;