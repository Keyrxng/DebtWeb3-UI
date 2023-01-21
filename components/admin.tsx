import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';

interface PaymentToken {
    address: string;
    added: boolean;
}

interface PoolData {
    totalShares: string;
    totalRewards: string;
    rps: string;
}

const AdminPanel = () => {
    const [paymentTokens, setPaymentTokens] = useState<PaymentToken[]>([]);
    const [poolData, setPoolData] = useState<PoolData>({
        totalShares: '',
        totalRewards: '',
        rps: '',
    });
    const [selectedPool, setSelectedPool] = useState<string>('DW3');

    const handleAddPaymentToken = (tokenAddress: string) => {
        setPaymentTokens((prevTokens) =>
            prevTokens.map((token) =>
                token.address === tokenAddress
                    ? { ...token, added: true }
                    : token
            )
        );
        // call the addPaymentToken function in the smart contract
    };

    const handleRemovePaymentToken = (tokenAddress: string) => {
        setPaymentTokens((prevTokens) =>
            prevTokens.map((token) =>
                token.address === tokenAddress
                    ? { ...token, added: false }
                    : token
            )
        );
        // call the removePaymentToken function in the smart contract
    };

    const handleCreatePool = () => {
        const { totalShares, totalRewards, rps } = poolData;
        // call the createDW3Pool or createSDW3Pool function in the smart contract depending on the selectedPool
    };

    return (
        <Container maxWidth="lg">
            <Container maxWidth="md" className='border-emerald-500 border-y-emerald-700 border rounded-xl' style={{ marginTop: '2rem' }}>
            {/* <Grid container spacing={3}> */}
                <Grid item xs={12} sm={6}>
                    <h3 className='text-white'>Add/Remove Payment Tokens</h3>
                    <TextField
                        label="Token Address"
                        color='secondary'
                        onChange={(event) =>
                            setPaymentTokens((prevTokens) => [
                                ...prevTokens,
                                { address: event.target.value, added: false },
                            ])
                        }
                    />
                    <Button
                        onClick={() =>
                            handleAddPaymentToken(
                                paymentTokens[paymentTokens.length - 1].address
                            )
                        }
                        variant="contained"
                        color="secondary"
                    >
                        Add Token
                    </Button>
                    <ul>
                        {paymentTokens.map((token) => (
                            <li key={token.address}>
                                {token.address}
                                <Button
                                    onClick={() => handleRemovePaymentToken(token.address)}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Remove
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid className='mb-5'item xs={12} sm={6}>
                    <h3 className='text-white'>Create Pool</h3>
                    <TextField
                        color='secondary'
                        label="Total Shares"
                        variant='outlined'
                        onChange={(event) =>
                            setPoolData({ ...poolData, totalShares: event.target.value })
                        }
                    />
                    <TextField
                        color='secondary'
                        label="Total Rewards"
                        onChange={(event) =>
                            setPoolData({ ...poolData, totalRewards: event.target.value })
                        }
                    />
                    <TextField
                        color='secondary'
                        label="RPS"
                        onChange={(event) =>
                            setPoolData({ ...poolData, rps: event.target.value })
                        }
                    />
                    <Button
                        onClick={handleCreatePool}
                        variant="contained"
                        color="secondary"
                        style={{ height: '3.5rem' }}
                    >
                        Create {selectedPool} Pool
                    </Button>
                {/* </Grid> */}
            </Grid>
        </Container>
        </Container>
    );
};

export default AdminPanel;