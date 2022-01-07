import socialList from "../../assets/socials-list";

import classes from "./SocialLinks.module.css";

const SocialLinks = () => {
  const rows = [];
  socialList.forEach((social, idx) => {
    if (idx % 3 === 0) {
      const links = socialList.slice(idx, idx + 3);

      rows.push(
        <div key={idx} className={classes["icon-container"]}>
          {links.map((link) => (
            <a
              href={link.link}
              target="_blank"
              className={classes.icon}
              key={link.id}
              rel="noreferrer"
            >
              <img src={link.image} alt={link.id} />
            </a>
          ))}
        </div>
      );
    }
  });

  return <div className={classes.socials}>{rows}</div>;
};

export default SocialLinks;
