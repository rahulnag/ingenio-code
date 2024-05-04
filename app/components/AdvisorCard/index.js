'use client'
import Image from 'next/image';
import styles from './style.module.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import ActiveButton from './active-button';
import InactiveButton from './inactive-button';
import Loading from '@/app/components/Loader'
const index = ({ id, name, pictureUrl, price, ...props }) => {

    const [advisorData, setAdvisorData] = useState({
        data: { 'call-availability': props['call-availability'], 'chat-availability': props['chat-availability'] },
        error: false,
        loading: false
    })

    useEffect(() => {
        const intervalid = setInterval(() => {
            getAdvisorData(id)
        }, 30000)

        return (() => {
            clearInterval(intervalid)
        })
    }, [])


    async function getAdvisorData(id) {
        try {
            setAdvisorData({ ...advisorData, loading: true })
            const res = await axios.get(
                `https://demo2255213.mockable.io/advisor-availability?advisorId=${id}`
            );
            const data = await res.data
            setAdvisorData((advisorData) => { return { ...advisorData, data: data } })
        }
        catch (error) {
            console.log("error......", error)
            setAdvisorData((advisorData) => { return { ...advisorData, error: true } })
        }

        finally {
            // console.log(advisorData)
            setAdvisorData((advisorData) => { return { ...advisorData, loading: false } })
        }
    }


    return (
        <div className={styles['card-container']}>
            <div className={styles['profile-image-holder']}>
                <Image src={pictureUrl} height={100} width={100} className={styles['image']} alt={name} />
                <p className={styles['profile-name']}>{name}</p>
            </div>
            <div>
                <p className={styles['profile-price']}>{price.replace("/min", "")}<span className={styles['price-measurement']}>/min</span></p>

                {advisorData.loading && <Loading />}
                {advisorData.error && <p>Error loading</p>}
                {(advisorData.data && !advisorData.loading) && <div className={styles['call-chat-holder']}>
                    {advisorData['data']['call-availability'] == "online" ? <ActiveButton text="CALL NOW  " refr="call" /> : <InactiveButton text="CALL LATER" refr="call" />}
                    {advisorData['data']['chat-availability'] == "online" ? <ActiveButton text="CHAT NOW  " refr="chat" /> : <InactiveButton text="CHAT LATER" refr="chat" />}
                </div>}
            </div>
        </div>
    );
};

export default index;