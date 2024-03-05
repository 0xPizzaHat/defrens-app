import Link from "next/link";
import { ThirdwebNftMedia, ConnectWallet, useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
import styles from '../../styles/Home.module.css'
import { CONTRACT_ADDRESS, stakingContractAddress } from '../../const/addresses';
import router from 'next/router';
import React from "react";
import Footer from "../../components/Footer";

export default function Profile() {
    const address = useAddress();

    const truncateAddress = (address: string) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const {
        contract
    } = useContract(CONTRACT_ADDRESS);

    const {
        data: ownedNFTs,
        isLoading: isOwnedNFTsLoading,
    } = useOwnedNFTs(contract, address);

    function stakeNft(id: string) {
        throw new Error('Function not implemented.');
    }

    return (
        <>
        <div className={styles.containerb}>
            {address ? (
                <div>
                    <div className={styles.containerc}>
                    <div>
                        <h2>GM, fren!</h2>
                        <p>Address: {truncateAddress(address || "")}</p>
                    </div>
                    <div className={styles.bttdiv}>
                    {address && (
                        <>
                        {/*<Link className={styles.bttlnk} href="/claim">FrenCards</Link>
                        <Link className={styles.bttlnk} href="/claim">GUM Factory</Link>
                        <Link className={styles.bttlnk} href="/claim">CMYK</Link>
                        <Link className={styles.bttlnk} href="/claim">deFrens</Link>*/}

                                                
                        </>
                    )}

                </div>
                    </div>
                   

                    <div>
                        <div className={styles.grid}>
                        {!isOwnedNFTsLoading ? (
                            ownedNFTs?.length! > 0 ? (
                                ownedNFTs?.map((nft) => (
                                    <div key={nft.metadata.id} className={styles.NFTCard}>
                                        <ThirdwebNftMedia
                                            metadata={nft.metadata}
                                        />
                                        <h3>{nft.metadata.name}</h3>
                                       
                                    </div>
                                ))
                            ) : (
                                <p>No NFTs owned.</p>
                            )
                        ) : (
                            <p>Loading...</p>
                        )}
                        </div>
                    </div>
                    
                </div>
            ) : (
                <div className={styles.main}>
                    <p>Connect your wallet to view your profile.</p>
                    <ConnectWallet
                    className={styles.connectButton}

                    modalTitle="frensdegens/"
                    modalTitleIconUrl="https://www.frensdegens.com/wp-content/uploads/2024/02/logo1.png"


                    welcomeScreen={() => {
                        return (
                            <div 
                            className={styles.containerModal}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            />
                        )
                    }}
        
                />
                </div>
            )}
        </div>
        <Footer />
</>
    )
}