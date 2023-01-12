import styles from "../styles/Section.module.css";

export default function Section({ children, title, description }) {
	return (
		<div className={styles.section}>
			<div>
				{title && <h3 className="text-center">{title}</h3>}
				{description && <p className="text-center m-3">{description}</p>}
			</div>				
			{children}
		</div>
	);
}
