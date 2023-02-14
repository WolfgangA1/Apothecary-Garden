import React from 'react';
import apothecray from '../../assests/images/apothecray.jpg';
import freshHerbs from "../../assests/images/freshHerbs.jpg";
import herbalMedicine from "../../assests/images/herbalMedicine.jpg";
import herbalTea from "../../assests/images/herbalTea.jpg";
import herbsForStore from "../../assests/images/herbsForStore.jpg";
import style from './style.module.scss';

const StoreHerbsPages = () => {

    return (
        <div className={style.container}>
            <h1>How to Store Herbs for Culinary & Medicinal Purposes</h1>
            <p>Are you wondering how to store herbs so they last longer? Learn the best storage methods for fresh, dried, and powdered herbs.</p>
            <img  src={herbsForStore} alt='' width='35%' height='auto' />
            <p>Herbs are plants with culinary flavors and medicinal properties. As soon as the plant is harvested it starts to die and so does everything in it. Luckily there are ways to preserve the plant so that it can be stored and used later. However, you have to store the preserved plant materials so that there's no further loss of nutrition so that when you go to use them, there's as much nutrition available to you as possible.</p>
            <p>The number one rule to storing herbs in a way that preserves as much of their medicinal properties as possible is to store them in a cool, dark, and dry place.</p>
            <p>Moisture will cause herbs to mold, and light and heat will further diminish the health benefits  they have.</p>
            <h4>How to Store Fresh Herbs</h4>
            <p>When not using fresh herbs immediately (whether in foods or in herbal preparations) they can be stored for a short time in the fridge. Cut herbs like basil, parsley, and cilantro can be kept in a bunch in a mason jar with an inch of water at the bottom or wrapped in a damp paper towel and sealed in a plastic bag in the crisper drawer.</p>
            <p>Stored in the refrigerator, flowers and plant tops will last 2-3 days, while barks and roots will stay good for 2-3 weeks. Be sure to store fresh herbs in labeled bags or jars and use them quickly</p>
            <img src={freshHerbs} alt='' width='35%' height='auto' />
            <p>Freezing works well for basil, chives, oregano, lemon balm, mint, or tarragon. Wash your fresh herbs and dry them on paper towels or with a salad spinner. Remove large woody stems and chop up the herbs and fill an ice cube tray with them. Top with olive oil and place them in the freezer. Once frozen, you can pop out the herb cubes and store them in a freezer bag.</p>
            <h4>How to Store Dried Herbs</h4>
            <p>Dried herbs can last anywhere from 2-4 years if stored properly depending upon the type of herb.</p>
            <p>First of all, make sure you are drying the herbs completely or they will mold and ruin all of the herbs. A dehydrator will make easy work of drying your homegrown herbs.</p>
            <p>Store herbs in air-tight jars or plastic bags in a cool, dark, and dry spot</p>
            <img src={herbalMedicine} alt='' width='35%' height='auto' />
            <p>Freezing works well for basil, chives, oregano, lemon balm, mint, or tarragon. Wash your fresh herbs and dry them on paper towels or with a salad spinner. Remove large woody stems and chop up the herbs and fill an ice cube tray with them. Top with olive oil and place them in the freezer. Once frozen, you can pop out the herb cubes and store them in a freezer bag.</p>
            <h4>How to Store Powdered Herbs</h4>
            <p>Tender herbs are easiest to store as powders. Once herbs are powdered, they will lose their freshness fairly quickly. Powdered herbs are best stored in glass jars wrapped in newspaper or some other opaque paper in the freezer or refrigerator. Chilled powdered herbs will last about 6 months.</p>
            <img src={apothecray} alt='' width='35%' height='auto' />
            <p>Powdered herbs left at room temperature should be kept in opaque glass jars. The shelf life of powdered herbs at room temperature is about 3 months.</p>
            <h4>Storing Herbal Preparations</h4>
            <p>Once you've used your herbs in your own herbal remedies, whether it's a tea, tincture, or capsule, you still need to remember to store your preparation so that it will last.</p>
            <p>Herbal teas can last up to two years if stored properly in an airtight container away from direct sunlight and moisture. However, the flavor of herbal teas can start to diminish after six months of storage.</p>
            <img src={herbalTea} alt='' width='35%' height='auto' />
            <p>Herbal tinctures last about 3 years and preserve the freshness and potency of medicinal plants. </p>
            <p>Capsules have a one-year shelf life when stored at room temperature. If stored in the refrigerator or freezer, they can stay potent for even longer.</p>
            <p>Remember that cool, dark, and dry is always best no matter what type of preparation it is because the longer your preparation is exposed to heat or light, the quicker the properties in it will break down.</p>


        </div>
    )
};

export default StoreHerbsPages;