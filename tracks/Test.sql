-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 07 Novembre 2016 à 16:24
-- Version du serveur :  5.7.16-0ubuntu0.16.04.1
-- Version de PHP :  7.0.8-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Test`
--

-- --------------------------------------------------------

--
-- Structure de la table `playlist_track`
--

CREATE TABLE `playlist_track` (
  `playlist_id` int(10) NOT NULL,
  `track_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `playlist_user`
--

CREATE TABLE `playlist_user` (
  `playlist_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `playlist_name` varchar(120) NOT NULL,
  `img_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `track`
--

CREATE TABLE `track` (
  `id` int(11) NOT NULL,
  `title` varchar(120) NOT NULL,
  `author` varchar(120) NOT NULL,
  `year` int(11) NOT NULL,
  `duration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `track`
--

INSERT INTO `track` (`id`, `title`, `author`, `year`, `duration`) VALUES
(1, 'Metal Meltdown', 'Judas Priest', 1990, 500),
(2, 'MidnightMover', 'Accept', 1990, 502),
(3, 'Eagle Fly Free', 'Helloween', 1986, 500),
(6, 'I Want out', 'Helloween', 1986, 500),
(18, 'Motorbreath', 'Metallica', 1983, 5000),
(19, 'Trollhammaren', 'Finntroll', 2005, 700),
(20, 'Häxbrigd', 'Finntroll', 2013, 5000),
(23, 'cacaboudin', 'cacaprout', 2010, 500);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`) VALUES
(1, 'robert', 'robertdu29', 'robert@bla.fr'),
(2, 'lucien', 'luciendu29', 'lucien@bla.fr'),
(4, 'josé', '$2y$10$r2f6Wzsu8.71ihGZujNWy.cx91ULG52Lu.GDIWc/5vQ2tgwItlEgO', 'none'),
(6, 'admin', '$2y$10$IpNFgqx6reXcODwu5MZm7.bsIHs/vD3P..YAm3Nv89YoHHNjvwrnm', 'none');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `playlist_track`
--
ALTER TABLE `playlist_track`
  ADD PRIMARY KEY (`playlist_id`,`track_id`);

--
-- Index pour la table `playlist_user`
--
ALTER TABLE `playlist_user`
  ADD PRIMARY KEY (`playlist_id`,`user_id`),
  ADD KEY `Supress_a_user` (`user_id`);

--
-- Index pour la table `track`
--
ALTER TABLE `track`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `playlist_user`
--
ALTER TABLE `playlist_user`
  MODIFY `playlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
--
-- AUTO_INCREMENT pour la table `track`
--
ALTER TABLE `track`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `playlist_track`
--
ALTER TABLE `playlist_track`
  ADD CONSTRAINT `supress` FOREIGN KEY (`playlist_id`) REFERENCES `playlist_user` (`playlist_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `playlist_user`
--
ALTER TABLE `playlist_user`
  ADD CONSTRAINT `Supress_a_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
