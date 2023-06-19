---
title: A Technical Infrastructure
date: 2023-04-23
background: /assets/images/aaron-thomas-dPmCzHQ7Vc4-unsplash.jpg
---

At the core of the **Hidden Collections Africa** approach is working with local and regional partners to develop not only digital content, but also the human and technical infrasture around the project to build commumity infrastructure to ensure the long-term preservation and use of digital assets.

In our first phase, we will be working with the [UbuntuNet Alliance](https://ubuntunet.net/).

## Cultural Memory Institutional Support

Hidden Collections Africa will work with individual partners to support the development of solutions that fit the needs of their collections. This support would advise throughout the digital asset lifecycle, from capture, description, access, and preservation. 

Individual organizations may need different levels of support to start and sustain digitization projects. Working with local partners, **Hidden Collections Africa** will develop training around the tools partners need to do their work. This could include procurement of equipment, training on digitization techniques for different types of media (manuscripts, film, audio, images, etc.), storage and quality assurance workflows, metadata description.

### Digitization

There are many considerations that go into digitization standards. In many cases we will be able to request certain technical specificiations for digital assets (image resolution, bit-rate, etc), but this can be complicated with some organizations. For instance, khizana in Algeria are privately held libraries in the Sahara where access to Internet and electricity are not always given. In such cases digitization solutions would need to include planning around these constraints. Solutions include solar battery packs and methods of delivering hard drive copies at various intervals.

### Description

We will need to work with local partners to develop supersets (or even new) metadata descriptions. Experiences of communities using Murkutu quickly showed that more traditional metadata standards (e.g. Dublin Core) were insufficient for their needs as dates, concepts, and cultural meanings just did not map to these standards. This metadata work will need to be done in concert with local institutions and regional partners to ensure digital items have the descriptors they need to be discoverable by their communities.

## Languages

Africa is home to a rich diversity of languages. 

- English?

## Discovery

## Preservation

**TODO**: Do we request folks run their own network, or perhaps run this in cloud instances across data centers?

We will work with local partners to develop preservation networks (based on a Private LOCKKS Network) to keep copies of sources developed for this project preserved by the partners. The basic tennants will be built upon distributed digital preservation methodologies that mitigate lost by ensuring multiple copies are geographically distributed across the continent. 

Member institutions work at their own pace to prepare their content for preservation, generating packages that meet the needs of their own needs and workflows. While some may include a rigorous workflow that may include systems like Fedora, Hydra, Archivematica, etc., other simply need to package their content in the "BagIt" format. 

Once packages are created, they will be submitted through an interface for automated testing. Once tested and approved, the packages will be distributed through the repository network nodes.

Once ingested, the network will monitor content to ensure that the data on all nodes is "correct" (what was originally uploaded). Should a mismatch in the network checks occur, the system will automatically determine the "best" copy and perform necessary repairs. 

Should a partner loose a copy of its (submitted) content for any reason, they will be able to download a full copy of all assets. 

### Technical Preservation Infrastructure

* Servers
  * 4 process for virtual servers; Intel Core i7 or better processor with at least 4 cores (if a physical server)
  * 8GB RAM
  * Linux-base operating system (RHEL, CENTOS, Rocky)
* Storage
  * At least 40TB of RAID protected storage
* Security
  * Only system administrators should have accounts on the machine.
* Networking
  * A dedicated IP address is required that is routable from the Internet. A firewall should be used to block all non-preservation traffic.

### Tools

Scripts and toosl to assisst members in preparing content for ingest into preservation network, including tools to assist with the creation of BagIt. 

### Hosting

Members who host a server cache purchase, install, and configure a server. 

### Cloud 

Note about Cloud services. 

### Security

- encryption
- decentralized system administration access
- only local administrators can access local servers

## Content Tiers

<table class="table">
    <thead>
    <tr>
        <th>Tier</th> 
        <th>Resources</th> 
        <th>Thumbnails</th> 
        <th>Rights</th> 
        <th>Coverage</th> 
        <th>Language</th> 
        <th>Benefits (Cumulative)</th> 
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Hidden Collections Africa as a <strong>search platform</strong></td>
        <td>Resources are hosted on the Web and openly accessible to all users without logging in.</td>
        <td>Thumbnail images are available, when appropriate.</td>
        <td>Cultural heritage objects and web resources have some rights statement, with clearly expressed copyright status.</td>
        <td>Metadata includes, at least, the following fields: title, agg_is_shown_at, agg_preview, rights, identifier, and one or more description oriented fields (cho_date, cho_description, cho_spatial, cho_temporal)</td>
        <td>Resources are described in any language.</td>
        <td><strong>Discovery</strong> - material is available in Hidden Collections Africa portal and indexed by search engines. <strong>Web traffic</strong> - click-throughs to partner site</td>
    </tr>
   <tr>
        <td>Hidden Collections Africa as an <strong>exploration platform</strong></td>
        <td>Resources are hosted on the Web and openly accessible to all users without logging in.</td>
        <td>400x400 resolution thumbnail images are available, when appropriate.</td>
        <td>Rights statements can be mapped to standardized fields.</td>
        <td>Depending on the type of resource, metadata for the majority of records includes the applicable remaining fields described in the Hidden Collections Africa application profile.</td>
        <td>Resources are described in multiple languages.</td>
        <td><strong>Enhanced discoverability</strong> - more metadata fields will be indexed and searchable in multiple languages. <strong>Use in thematic collections</strong> - content will be included in curated collections discoverable from the Hidden Collections Africa home page. <strong>More marketing</strong> through Hidden Collections Africa.</td>
    </tr>
    <tr>
        <td>Hidden Collections Africa as an <strong>distribution platform</strong></td>
        <td>Resources are hosted on the Web and openly accessible to all users without logging in and images are accessible via IIIF format.</td>
        <td>400x400 resolution thumbnail images are available via IIIF, when appropriate.</td>
        <td>Cultural heritage objects and web resources have rights statements that allow for downstream reuse.</td>
        <td>Metadata includes fields specifying downstream sharing rights. These fields can often be interpreted from other rights metadata.</td>
        <td>Resources are described in multiple languages and the metadata is properly encoded for language identification.</td>
        <td><strong>Downstream use</strong> - collections will be available for re-use in other projects, further increasing discoverability. <strong>New feature demonstrations</strong> - collections will be prioritized for use in demonstrating new Hidden Collections Africa features.</td>
    </tr>
    </tbody>
</table>
